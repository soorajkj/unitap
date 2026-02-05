"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  type UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  type ComponentProps,
  Fragment,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { cn } from "tailwind-variants";

type SortableItemBase = { id: UniqueIdentifier };

export interface SortableListProps<T extends SortableItemBase>
  extends ComponentProps<"ul"> {
  items: T[];
  onDragEventEnd: (items: T[]) => void;
  renderItem: (item: T) => ReactNode;
}

export default function SortableList<T extends SortableItemBase>({
  items,
  onDragEventEnd,
  renderItem,
  className,
}: SortableListProps<T>) {
  // Local state acts as a buffer to keep the UI stable during drag-and-drop.
  // This avoids flicker caused by async React Query cache updates.
  const [localItems, setLocalItems] = useState(items);
  const id = useId();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const fromIndex = items.findIndex(({ id }) => id === active.id);
      const toIndex = items.findIndex(({ id }) => id === over.id);

      if (fromIndex === -1 || toIndex === -1) return;

      const reordered = arrayMove(items, fromIndex, toIndex);
      onDragEventEnd(reordered);
      setLocalItems(reordered);
    },
    [items, onDragEventEnd],
  );

  return (
    <DndContext
      id={id}
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToParentElement]}
      onDragEnd={handleDragEnd}
    >
      <ul role="application" className={cn("w-full", className)}>
        <SortableContext
          items={localItems.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          {localItems.map((item) => (
            <Fragment key={item.id}>{renderItem(item)}</Fragment>
          ))}
        </SortableContext>
      </ul>
    </DndContext>
  );
}
