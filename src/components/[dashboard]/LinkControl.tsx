"use client";

import { Tooltip } from "@base-ui/react/tooltip";
import { useSortable } from "@dnd-kit/sortable";
import {
  Analytics01Icon,
  Archive03Icon,
  Delete02Icon,
  DragDropVerticalIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "tailwind-variants";
import Button from "@/components/core/button";
import {
  useDeleteLinkMutation,
  useUpdateLinkMutation,
} from "@/hooks/useLinksMutations";
import type { Link } from "@/types/response";
import EditLinkDialog from "./EditLinkDialog";

interface LinkControlProps {
  link: Link;
}

export default function LinkControl({ link }: LinkControlProps) {
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: link.id,
  });

  const [isDeleting, setIsDeleting] = useState(false);
  const deleteLinkMutation = useDeleteLinkMutation();
  const updateLinkMutation = useUpdateLinkMutation();

  return (
    <div ref={setActivatorNodeRef} className="relative">
      <motion.div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xs">
        <div className="flex items-center gap-px">
          <div className="ml-1 h-full">
            <Button
              aria-label="Reorder link"
              variant="secondary"
              size="ism"
              {...listeners}
              {...attributes}
            >
              <HugeiconsIcon icon={DragDropVerticalIcon} />
            </Button>
          </div>
          <div className="flex w-full gap-4 rounded-xl p-3">
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-sm font-medium text-neutral-950">
                  {link.title}
                </p>
                <p className="text-xs underline decoration-neutral-300 underline-offset-2">
                  {link.url}
                </p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-1 items-center gap-1">
                  <Tooltip.Provider>
                    <EditLinkDialog link={link} />
                    <Tooltip.Root>
                      <Tooltip.Trigger
                        delay={0}
                        render={
                          <Button
                            aria-label="Favourite link"
                            variant="secondary"
                            size="ism"
                            onClick={() =>
                              updateLinkMutation.mutate({
                                id: link.id,
                                data: { favorite: !link.favorite },
                              })
                            }
                            className={cn(null, {
                              "[&_svg]:fill-amber-400 [&_svg]:text-amber-400":
                                link.favorite,
                            })}
                          >
                            <HugeiconsIcon icon={StarIcon} />
                          </Button>
                        }
                      />
                      <Tooltip.Portal>
                        <Tooltip.Positioner side="bottom" sideOffset={4}>
                          <Tooltip.Popup className="rounded-md bg-neutral-950 px-1.5 py-1 text-xs font-medium text-white">
                            <Tooltip.Arrow />
                            Favourite
                          </Tooltip.Popup>
                        </Tooltip.Positioner>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                    <Tooltip.Root>
                      <Tooltip.Trigger
                        delay={0}
                        render={
                          <Button
                            aria-label="Archive link"
                            variant="secondary"
                            size="ism"
                            onClick={() =>
                              updateLinkMutation.mutate({
                                id: link.id,
                                data: { archive: true },
                              })
                            }
                          >
                            <HugeiconsIcon icon={Archive03Icon} />
                          </Button>
                        }
                      />
                      <Tooltip.Portal>
                        <Tooltip.Positioner side="bottom" sideOffset={4}>
                          <Tooltip.Popup className="rounded-md bg-neutral-950 px-1.5 py-1 text-xs font-medium text-white">
                            <Tooltip.Arrow />
                            Archive
                          </Tooltip.Popup>
                        </Tooltip.Positioner>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                    <Tooltip.Root>
                      <Tooltip.Trigger
                        delay={0}
                        render={
                          <Button
                            aria-label="Analytics"
                            variant="secondary"
                            size="sm"
                          >
                            <HugeiconsIcon icon={Analytics01Icon} />
                            <span>12 Clicks</span>
                          </Button>
                        }
                      />
                      <Tooltip.Portal>
                        <Tooltip.Positioner side="bottom" sideOffset={4}>
                          <Tooltip.Popup className="rounded-md bg-neutral-950 px-1.5 py-1 text-xs font-medium text-white">
                            <Tooltip.Arrow />
                            Analytics
                          </Tooltip.Popup>
                        </Tooltip.Positioner>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger
                      delay={0}
                      render={
                        <Button
                          aria-label="Delete link"
                          variant="secondary"
                          size="ism"
                          onClick={() => setIsDeleting((prev) => !prev)}
                        >
                          <HugeiconsIcon icon={Delete02Icon} />
                        </Button>
                      }
                    />
                    <Tooltip.Portal>
                      <Tooltip.Positioner side="bottom" sideOffset={4}>
                        <Tooltip.Popup className="rounded-md bg-neutral-950 px-1.5 py-1 text-xs font-medium text-white">
                          <Tooltip.Arrow />
                          Delete
                        </Tooltip.Popup>
                      </Tooltip.Positioner>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isDeleting && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-center bg-neutral-300/40 py-1">
                <p className="text-sm font-medium text-neutral-950">Delete</p>
              </div>
              <div className="flex items-center justify-between p-3">
                <p className="mr-4 text-xs text-red-600">
                  Are you sure want to delete this item forever? can&apos;t be
                  undo
                </p>
                <div className="flex items-center gap-1">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsDeleting(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={deleteLinkMutation.isPending}
                    onClick={() => deleteLinkMutation.mutate(link.id)}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
