export * from "./schemas";

import { MikroORM } from "@mikro-orm/core";
import { defineConfig } from "@mikro-orm/mongodb";
import { MongoHighlighter } from "@mikro-orm/mongo-highlighter";

import { Client, Product, Order } from "../entities";
import { Address, OrderLine } from "@/valueObjects";

declare global {
  var __MikroORM__: MikroORM | undefined;
}

export const getORM = async () => {
  if (!global.__MikroORM__) {
    global.__MikroORM__ = await MikroORM.init(
      defineConfig({
        entities: [Client, Address, Product, Order, OrderLine],
        dbName: process.env.DATABASE_NAME,
        clientUrl: process.env.DATABASE_URL,
        highlighter: new MongoHighlighter(),
        debug: true,
      })
    );

    const generator = global.__MikroORM__.getSchemaGenerator();
    // await generator.updateSchema();
  }
  return global.__MikroORM__;
};
