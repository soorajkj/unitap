import { create, type ExtractState } from "zustand";
import { combine } from "zustand/middleware";

export const useHandlesManagerStore = create(
  combine(
    {
      open: false,
      mode: "list" as "list" | "create" | "edit",
      selectedId: null as string | null,
    },
    (set) => ({
      openList: () => set({ mode: "list", selectedId: null, open: true }),
      openCreate: () => set({ mode: "create", selectedId: null, open: true }),
      openEdit: (id: string) =>
        set({ mode: "edit", selectedId: id, open: true }),
      close: () => set({ open: false, mode: "list", selectedId: null }),
      setOpen: (open: boolean) => set({ open }),
    }),
  ),
);

export type UseHandlesManagerStore = ExtractState<
  typeof useHandlesManagerStore
>;
