import { Options } from "@mikro-orm/core";
import { Client, Batch, OrderLine, Product } from "../entities";

const config: Options = {
  dbName: "store",
  entities: [Client, Batch, OrderLine, Product],
  debug: process.env.DEBUG === "true" || process.env.DEBUG?.includes("db"),
};

export default config;
