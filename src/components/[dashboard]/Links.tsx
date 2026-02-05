"use client";

import { useLinksQuery } from "@/hooks/useLinksQuery";
import SortableList from "./SortableList";

export default function Links() {
  const { data: links } = useLinksQuery();

  return (
    <SortableList
      items={links}
      onDragEventEnd={() => {}}
      renderItem={(link) => {
        return (
          <div key={link.id}>
            <h4>{link.title}</h4>
          </div>
        );
      }}
    ></SortableList>
  );
}
