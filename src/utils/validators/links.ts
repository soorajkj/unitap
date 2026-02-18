import z from "zod";

export const createLinkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("Invalid URL"),
  archive: z.boolean().default(false),
});

export const updateLinkSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  url: z.url("Invalid URL").optional(),
});

export const reorderLinksSchema = z.object({
  ids: z.array(z.string()).min(1),
});
