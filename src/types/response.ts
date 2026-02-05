import type { InferResponseType } from "hono";
import type { hrpc } from "@/lib/hrpc";

export type Handle = InferResponseType<typeof hrpc.api.handles.$get>[number];

export type Public = InferResponseType<
  (typeof hrpc.api.public)[":username"]["$get"]
>;
