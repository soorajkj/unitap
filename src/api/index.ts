import { HTTPException } from "hono/http-exception";
import { authRoute } from "@/api/routes/auth.route";
import { publicRoute } from "@/api/routes/public.route";
import { hono } from "@/lib/hono";
import { handlesRoute } from "./routes/handles.route";
import { linksRoute } from "./routes/links.route";
import { platformsRoute } from "./routes/platforms.route";

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
  .route("/handles", handlesRoute)
  .route("/links", linksRoute)
  .route("/public", publicRoute);

export type ApiType = typeof api;
export default api;
