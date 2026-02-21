"use client";

import { useReorderLinksMutation } from "@/hooks/useLinksMutations";
import { useLinksQuery } from "@/hooks/useLinksQuery";
import type { Link } from "@/types/response";
import LinkControl from "./LinkControl";
import SortableItem from "./SortableItem";
import SortableList from "./SortableList";

export default function Links() {
  const { data } = useLinksQuery();
  const links = data?.filter((l) => !l.archive) ?? [];

  const { mutate } = useReorderLinksMutation();

  const handleReorder = (handles: Link[]) => {
    mutate({ ids: handles.map((l) => l.id) });
  };

  if (!links.length) {
    return <div>No Links, add new </div>;
  }

  return (
    <SortableList
      items={links}
      onDragEventEnd={handleReorder}
      className="space-y-2"
      renderItem={(link) => {
        return (
          <SortableItem uid={link.id} key={link.id}>
            <LinkControl link={link} />
          </SortableItem>
        );
      }}
    />
  );
}
