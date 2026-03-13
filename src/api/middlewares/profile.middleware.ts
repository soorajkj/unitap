import { HTTPException } from "hono/http-exception";
import { hono } from "@/lib/hono";

export const profileMiddleware = hono.createMiddleware(async (c, next) => {
  const db = c.get("prisma");
  const user = c.get("user");

  const profile = await db.profile.findUnique({
    where: { userId: user.id },
    select: { id: true },
  });

  if (!profile) throw new HTTPException(401, { message: "Profile not found" });

  c.set("profileId", profile.id);

  await next();
});
