import z from "zod";

export const createHandleSchema = z.object({
  platformId: z.string().min(1),
  url: z
    .url()
    .trim()
    .transform((v) => v.replace(/\/$/, "")),
});

export const updateHandleSchema = z.object({
  url: z.url().trim().optional(),
  order: z.number().int().min(0).optional(),
  archive: z.boolean().optional(),
});

export const reorderHandlesSchema = z.object({
  platformIds: z.string().array().min(1),
});
