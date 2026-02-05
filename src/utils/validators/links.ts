import z from "zod";

export const createLinkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.string().url("Invalid URL"),
  order: z.number().int().nonnegative().default(0),
  archive: z.boolean().default(false),
});

export const updateLinkSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  url: z.url("Invalid URL").optional(),
  archive: z.boolean().optional(),
});

export const reorderLinksSchema = z.object({
  ids: z.array(z.string()).min(1),
});
