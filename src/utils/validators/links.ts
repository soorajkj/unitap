import z from "zod";

export const createLinkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("Invalid URL"),
});

export const updateLinkSchema = z.object({
  title: z.string().min(1).optional(),
  url: z.url().optional(),
  archive: z.boolean().optional(),
  favorite: z.boolean().optional(),
});

export const reorderLinksSchema = z.object({
  ids: z.array(z.string()).min(1),
});
