import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type z from "zod";
import { getQueryClient } from "@/lib/queryClient";
import type { Handle } from "@/types/response";
import {
  createHandle,
  deleteHandle,
  reorderHandles,
  updateHandle,
} from "@/utils/quries/handles";
import type {
  createHandleSchema,
  reorderHandlesSchema,
  UpdateHandleSchema,
} from "@/utils/validators/handles";

export const useHandlesCreateMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: z.infer<typeof createHandleSchema>) =>
      createHandle(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["HANDLES"] });
    },
  });
};

type ReorderHandlesSchema = z.infer<typeof reorderHandlesSchema>;

export const useReorderHandleMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (platformIds: ReorderHandlesSchema) =>
      reorderHandles(platformIds),

    onMutate: async (payload) => {
      await queryClient.cancelQueries({ queryKey: ["HANDLES"] });
      const pre = queryClient.getQueryData<Handle[]>(["HANDLES"]);
      queryClient.setQueryData<Handle[]>(["HANDLES"], (old) => {
        if (!old) return old;
        const map = new Map(old.map((h) => [h.platformId, h]));
        const reordered: Handle[] = [];
        for (const [index, platformId] of payload.platformIds.entries()) {
          const handle = map.get(platformId);
          if (!handle) return old;

          reordered.push({
            ...handle,
            order: index,
          });
        }

        return reordered;
      });

      return { pre };
    },
    onError: (_err, _vars, context) => {
      if (!context?.pre) return;
      queryClient.setQueryData(["HANDLES"], context.pre);
      toast("Failed to reorder handles. Please try again.");
    },
    onSuccess: () => toast("Handles reordered successfully."),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["HANDLES"] }),
  });
};

export const useHandleUpdateMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: UpdateHandleSchema;
    }) => updateHandle({ id, data }),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ["HANDLES"] });
      const pre = queryClient.getQueryData<Handle[]>(["HANDLES"]);
      if (pre) {
        queryClient.setQueryData<Handle[]>(["HANDLES"], (old) =>
          old?.map((item) => (item.id === id ? { ...item, ...data } : item)),
        );
      }
      return { pre };
    },
    onError: (_err, _vars, context) => {
      if (!context) return;
      queryClient.setQueryData(["HANDLES"], context.pre);
    },
    onSuccess: () => toast("Handle updated successfully."),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["HANDLES"] });
    },
  });
};

export const useHandleDeleteMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: async (id: string) => deleteHandle(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["HANDLES"] });
      const pre = queryClient.getQueryData<Handle[]>(["HANDLES"]);
      if (pre) {
        queryClient.setQueryData<Handle[]>(["HANDLES"], (old) =>
          old?.filter((item) => item.id !== id),
        );
      }
      return { pre };
    },
    onError: (_err, _vars, context) => {
      if (!context) return;
      queryClient.setQueryData(["HANDLES"], context.pre);
    },
    onSuccess: () => toast("Handle deleted successfully."),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["HANDLES"] });
    },
  });
};
