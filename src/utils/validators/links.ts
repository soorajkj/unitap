import z from "zod";

export const createLinkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("Invalid URL"),
});

export const updateLinkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("Invalid URL"),
});

export const reorderLinksSchema = z.object({
  ids: z.array(z.string()).min(1),
});
