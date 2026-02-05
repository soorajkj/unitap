import type z from "zod";
import { hrpc } from "@/lib/hrpc";
import type {
  createHandleSchema,
  reorderHandlesSchema,
} from "../validators/handles";

type ReorderHandlesSchema = z.infer<typeof reorderHandlesSchema>;

export const getHandles = async () => {
  const res = await hrpc.api.handles.$get();
  if (!res.ok) throw new Error("Failed to fetch platforms");
  return await res.json();
};

export const createHandle = async (
  json: z.infer<typeof createHandleSchema>,
) => {
  const res = await hrpc.api.handles.$post({ json });
  if (!res.ok) throw new Error("Failed to create platforms");
  return await res.json();
};

export const reorderHandles = async (json: ReorderHandlesSchema) => {
  const res = await hrpc.api.handles.reorder.$patch({ json });
  if (!res.ok) throw new Error("Failed to reorder links");
  return await res.json();
};
