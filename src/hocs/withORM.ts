import { RequestContext } from "@mikro-orm/core";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { getORM } from "@/orm";

const withORM =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const orm = await getORM();
    return RequestContext.create(orm!.em, async () => handler(req, res));
  };

export default withORM;
