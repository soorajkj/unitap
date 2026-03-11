import type { InferResponseType } from "hono";
import type { hrpc } from "@/lib/hrpc";

export type Handle = InferResponseType<typeof hrpc.api.handles.$get>[number];

export type Link = InferResponseType<typeof hrpc.api.links.$get>[number];

export type Profile = InferResponseType<typeof hrpc.api.profile.$get>;

export type Public = InferResponseType<
  (typeof hrpc.api.public)[":username"]["$get"]
>;
