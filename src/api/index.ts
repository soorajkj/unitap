import { HTTPException } from "hono/http-exception";
import { authRoute } from "@/api/routes/auth.route";
import { handlesRoute } from "@/api/routes/handles.route";
import { linksRoute } from "@/api/routes/links.route";
import { platformsRoute } from "@/api/routes/platforms.route";
import { profileRoute } from "@/api/routes/profile.route";
import { publicRoute } from "@/api/routes/public.route";
import { hono } from "@/lib/hono";

const api = hono
  .createApp()
  .basePath("/api")
  .onError((error, c) => {
    switch (true) {
      case error instanceof HTTPException:
        return error.getResponse();
      default:
        return c.json({ error: error.message }, 500);
    }
  })
  .route("/auth", authRoute)
  .route("/platforms", platformsRoute)
  .route("/profile", profileRoute)
  .route("/handles", handlesRoute)
  .route("/links", linksRoute)
  .route("/public", publicRoute);

export type ApiType = typeof api;
export default api;
