import z from "zod";

export const createHandleSchema = z.object({
  platformId: z.string().min(1, "Platform is required"),
  url: z
    .url()
    .trim()
    .transform((v) => v.replace(/\/$/, "")),
});

export const updateHandleSchema = z.object({
  url: z
    .url()
    .trim()
    .transform((v) => v.replace(/\/$/, ""))
    .optional(),
  archive: z.boolean().optional(),
});

export type UpdateHandleSchema = z.infer<typeof updateHandleSchema>;

export const reorderHandlesSchema = z.object({
  platformIds: z.string().array().min(1),
});
