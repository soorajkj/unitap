"use client";

import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ComponentProps, CSSProperties } from "react";

interface SortableItemProps extends ComponentProps<"li"> {
  uid: UniqueIdentifier;
}

export default function SortableItem({ uid, ...props }: SortableItemProps) {
  const { setNodeRef, transform, transition } = useSortable({
    id: uid,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as CSSProperties;

  return <li ref={setNodeRef} style={style} className="relative" {...props} />;
}
