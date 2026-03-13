import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type z from "zod";
import { getQueryClient } from "@/lib/queryClient";
import type { Link } from "@/types/response";
import {
  createLink,
  deleteLink,
  reorderLinks,
  updateLink,
} from "@/utils/quries/links";
import type {
  createLinkSchema,
  reorderLinksSchema,
  updateLinkSchema,
} from "@/utils/validators/links";

export const useLinksCreateMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: z.infer<typeof createLinkSchema>) => createLink(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["LINKS"] });
      const pre = queryClient.getQueryData<Link[]>(["LINKS"]);
      queryClient.setQueryData<Link[]>(["LINKS"], (old) => {
        const optimisticLink: Link = {
          id: `optimistic-${Math.random().toString(36).substring(2, 9)}`,
          title: data.title,
          url: data.url,
          order: pre?.length ? pre[0].order - 1 : 0,
          archive: false,
          favorite: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          profileId: `optimistic-${Math.random().toString(36).substring(2, 9)}`,
        };

        return old ? [optimisticLink, ...old] : [optimisticLink];
      });

      return { pre };
    },
    onError: (_err, _newLink, context) => {
      if (context?.pre) {
        queryClient.setQueryData(["LINKS"], context.pre);
      }
    },
    onSuccess: () => toast.success("Link created successfully"),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["LINKS"] });
    },
  });
};

type ReorderHandlesSchema = z.infer<typeof reorderLinksSchema>;

export const useReorderLinksMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: ReorderHandlesSchema) => reorderLinks(data),
    onMutate: async (payload) => {
      await queryClient.cancelQueries({ queryKey: ["LINKS"] });
      const pre = queryClient.getQueryData<Link[]>(["LINKS"]);
      queryClient.setQueryData<Link[]>(["LINKS"], (old) => {
        if (!old) return old;
        const map = new Map(old.map((h) => [h.id, h]));
        const reordered: Link[] = [];
        for (const [index, platformId] of payload.ids.entries()) {
          const handle = map.get(platformId);
          if (!handle) return old;
          reordered.push({ ...handle, order: index });
        }
        return reordered;
      });
      return { pre };
    },
    onError: (_err, _vars, context) => {
      if (!context?.pre) return;
      queryClient.setQueryData(["LINKS"], context.pre);
      toast("Failed to reorder links. Please try again.");
    },
    onSuccess: () => toast("Links reordered successfully."),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["LINKS"] }),
  });
};

type UpdateLinkSchema = z.infer<typeof updateLinkSchema>;

export const useUpdateLinkMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateLinkSchema }) =>
      updateLink({ id, data }),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ["LINKS"] });
      const pre = queryClient.getQueryData<Link[]>(["LINKS"]);
      if (pre) {
        queryClient.setQueryData<Link[]>(["LINKS"], (old) =>
          old?.map((item) => (item.id === id ? { ...item, ...data } : item)),
        );
      }
      return { pre };
    },
    onError: (_err, _vars, context) => {
      if (!context) return;
      queryClient.setQueryData(["LINKS"], context.pre);
    },
    onSuccess: () => toast("Link updated successfully."),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["LINKS"] });
    },
  });
};

export const useDeleteLinkMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteLink(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["LINKS"] });
      const preLinks = queryClient.getQueryData<Link[]>(["LINKS"]);
      queryClient.setQueryData<Link[]>(["LINKS"], (old) =>
        old ? old.filter((link) => link.id !== id) : [],
      );
      return { preLinks };
    },
    onError: (_err, _id, context) => {
      if (context?.preLinks) {
        queryClient.setQueryData(["LINKS"], context.preLinks);
      }
    },
    onSuccess: () => toast.success("Link deletion success"),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["LINKS"] });
    },
  });
};
