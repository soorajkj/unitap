"use client";

import { useReorderHandleMutation } from "@/hooks/useHandlesMutation";
import { useHandlesQuery } from "@/hooks/useHandlesQuery";
import type { Handle } from "@/types/response";
import HandleControl from "./HandleControl";
import SortableItem from "./SortableItem";
import SortableList from "./SortableList";

export default function Handles() {
  const { data: handles } = useHandlesQuery();
  const { mutate } = useReorderHandleMutation();

  const handleReorder = (handles: Handle[]) => {
    mutate({ platformIds: handles.map((h) => h.platformId) });
  };

  if (!handles.length) {
    return <div>No handles, add new </div>;
  }

  return (
    <SortableList
      items={handles}
      onDragEventEnd={handleReorder}
      className="space-y-2"
      renderItem={(handle) => (
        <SortableItem uid={handle.id} key={handle.id}>
          <HandleControl handle={handle} />
        </SortableItem>
      )}
    />
  );
}
