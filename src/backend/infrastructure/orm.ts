import { defineConfig, MikroORM, RequestContext } from "@mikro-orm/mongodb";

import config from "@/config/mikro-orm";

declare global {
  var __MikroORM__: MikroORM | undefined;
}

export const getORM = () => {
  if (!global.__MikroORM__) {
    global.__MikroORM__ = MikroORM.initSync(defineConfig(config));
  }
  return global.__MikroORM__;
};
