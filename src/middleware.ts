import { NextResponse, type NextRequest } from "next/server";
import { dbConnect } from "@/config";
import { createErrorResponse } from "./backend/application/helpers";

export const config = {
  matcher: "/api/:path*",
};

export async function middleware(request: NextRequest) {
  // try {
  //   await dbConnect();
  //   return NextResponse.next();
  // } catch (error) {
  //   console.error("Database connection error", error);
  //   return NextResponse.json(
  //     createErrorResponse(
  //       "DatabaseConnectionError",
  //       "Database connection error",
  //       500
  //     ),
  //     { status: 500 }
  //   );
  // }
}
