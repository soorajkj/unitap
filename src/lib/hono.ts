import { createFactory } from "hono/factory";
import { auth, type User } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type Variables = {
  prisma: typeof prisma;
  auth: typeof auth;
  user: NonNullable<User>;
  profileId: string;
};

type Bindings = {
  Variables: Variables;
};

export const hono = createFactory<Bindings>({
  defaultAppOptions: { strict: false },
  initApp(app) {
    app.use(async (c, next) => {
      c.set("prisma", prisma);
      c.set("auth", auth);
      await next();
    });
  },
});
