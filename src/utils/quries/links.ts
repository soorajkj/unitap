import type z from "zod";
import { hrpc } from "@/lib/hrpc";
import type {
  createLinkSchema,
  reorderLinksSchema,
  updateLinkSchema,
} from "@/utils/validators/links";

export const getLinks = async () => {
  const res = await hrpc.api.links.$get();
  if (!res.ok) throw new Error("Failed to fetch links");
  return await res.json();
};

export const getLinksAcrchives = async () => {
  const res = await hrpc.api.links.archived.$get();
  if (!res.ok) throw new Error("Failed to fetch archived links");
  return await res.json();
};

export const createLink = async (data: z.infer<typeof createLinkSchema>) => {
  const res = await hrpc.api.links.$post({ json: data });
  if (!res.ok) throw new Error("Failed to create platforms");
  return await res.json();
};

type ReorderLinksSchema = z.infer<typeof reorderLinksSchema>;

export const reorderLinks = async (data: ReorderLinksSchema) => {
  const res = await hrpc.api.links.reorder.$patch({ json: data });
  if (!res.ok) throw new Error("Failed to reorder links");
  return await res.json();
};

type UpdateLinksSchema = z.infer<typeof updateLinkSchema>;

export const archiveLink = async (id: string) => {
  const res = await hrpc.api.links[":id"].archive.$patch({ param: { id } });
  if (!res.ok) throw new Error("Failed to archive link");
  return await res.json();
};

export const unarchiveLink = async (id: string) => {
  const res = await hrpc.api.links[":id"].unarchive.$patch({ param: { id } });
  if (!res.ok) throw new Error("Failed to unarchive link");
  return await res.json();
};

export const updateLink = async ({
  id,
  data,
}: {
  id: string;
  data: UpdateLinksSchema;
}) => {
  const res = await hrpc.api.links[":id"].$patch({ param: { id }, json: data });
  if (!res.ok) throw new Error("Failed to update link");
  return await res.json();
};

export const deleteLink = async (id: string) => {
  const res = await hrpc.api.links[":id"].$delete({ param: { id } });
  if (!res.ok) throw new Error("Failed to delete link");
  return await res.json();
};
