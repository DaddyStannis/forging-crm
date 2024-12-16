import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createProduct } from "@/backend/application";
import { ProductSchema } from "@/backend/application/schemas";
import {
  MongooseCategoryRepository,
  MongooseProductRepository,
} from "@/backend/infrastructure/repositories";
import { createErrorResponse } from "@/backend/application/helpers";
import { dbConnect } from "@/config";

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
  }

  try {
    await dbConnect();

    const products = new MongooseProductRepository();
    const categories = new MongooseCategoryRepository();

    if (!body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    const parsedBody = ProductSchema.parse(body);

    const product = await createProduct(parsedBody, products, categories);

    return NextResponse.json(product);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        createErrorResponse(
          "ValidationError",
          "Invalid input data.",
          400,
          err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          }))
        ),
        { status: 400 }
      );
    }
    console.error(err);
    return NextResponse.json(
      createErrorResponse("InternalServerError", "Something went wrong.", 500),
      { status: 500 }
    );
  }
}
