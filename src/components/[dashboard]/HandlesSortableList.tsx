"use client";

import HandleControl from "@/components/[dashboard]/HandleControl";
import SortableItem from "@/components/[dashboard]/SortableItem";
import SortableList from "@/components/[dashboard]/SortableList";
import { useReorderHandleMutation } from "@/hooks/useHandlesMutation";
import { useHandlesQuery } from "@/hooks/useHandlesQuery";
import type { Handle } from "@/types/response";

export default function HandlesSortableList() {
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
      renderItem={(handle) => (
        <SortableItem uid={handle.id} key={handle.id}>
          <HandleControl handle={handle} />
        </SortableItem>
      )}
    />
  );
}
