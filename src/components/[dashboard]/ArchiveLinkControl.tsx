"use client";

import { Tabs } from "@base-ui/react/tabs";
import { Tooltip } from "@base-ui/react/tooltip";
import {
  Analytics01Icon,
  Delete02Icon,
  Unarchive03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Button from "@/components/core/button";
import {
  useDeleteLinkMutation,
  useUpdateLinkMutation,
} from "@/hooks/useLinksMutations";
import type { Link } from "@/types/response";

interface ArchiveLinkControlProps {
  link: Link;
}

export default function ArchiveLinkControl({ link }: ArchiveLinkControlProps) {
  const updateLinkMutation = useUpdateLinkMutation();
  const deleteLinkMutation = useDeleteLinkMutation();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabChange = (value: string) => {
    setActiveTab((prev) => (prev === value ? null : value));
  };

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={handleTabChange}
      className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xs"
    >
      <div className="flex w-full gap-4 p-4">
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-sm font-medium text-stone-950">{link.title}</p>
          <p className="text-xs underline decoration-stone-300 underline-offset-2">
            {link.url}
          </p>
        </div>
        <Tabs.List className="relative flex items-center gap-1">
          <Tooltip.Provider>
            <TabTrigger
              icon={Analytics01Icon}
              label="Analytics"
              onClick={() => handleTabChange("analytics")}
            />
            <TabTrigger
              icon={Unarchive03Icon}
              label="Unarchive"
              onClick={() => handleTabChange("unarchive")}
            />
            <TabTrigger
              icon={Delete02Icon}
              label="Delete"
              onClick={() => handleTabChange("delete")}
            />
          </Tooltip.Provider>
          <Tabs.Indicator className="absolute top-1/2 left-0 h-6 w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-sm bg-gray-100 transition-all duration-200 ease-in-out" />
        </Tabs.List>
      </div>

      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <Tabs.Panel value="analytics" keepMounted={true}>
              <div className="flex items-center justify-between bg-stone-50 p-4">
                <p className="text-xs text-stone-600">
                  Analytics coming soon...
                </p>
                <p className="text-sm font-medium text-stone-950">0 Clicks</p>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="unarchive" keepMounted={true}>
              <div className="flex flex-col bg-stone-50">
                <div className="flex items-center justify-center bg-stone-300/40 py-1">
                  <p className="text-sm font-medium text-stone-950">Restore</p>
                </div>
                <div className="flex items-center justify-between p-4">
                  <p className="text-xs text-stone-600">Restore this link?</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setActiveTab(null)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={() =>
                        updateLinkMutation.mutate({
                          id: link.id,
                          data: { archive: false },
                        })
                      }
                      disabled={updateLinkMutation.isPending}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="delete" keepMounted={true}>
              <div className="flex flex-col">
                <div className="flex items-center justify-center bg-stone-300/40 py-1">
                  <p className="text-sm font-medium text-stone-950">Delete</p>
                </div>
                <div className="flex items-center justify-between p-4">
                  <p className="text-xs text-red-600">Delete forever?</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setActiveTab(null)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteLinkMutation.mutate(link.id)}
                      disabled={deleteLinkMutation.isPending}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Tabs.Panel>
          </motion.div>
        )}
      </AnimatePresence>
    </Tabs.Root>
  );
}

function TabTrigger({
  icon,
  label,
  onClick,
}: {
  icon: IconSvgElement;
  label: string;
  onClick: () => void;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        render={
          <Button variant="secondary" size="ism" onClick={onClick}>
            <HugeiconsIcon icon={icon} />
          </Button>
        }
      />
      <Tooltip.Portal>
        <Tooltip.Positioner side="bottom" sideOffset={4}>
          <Tooltip.Popup className="rounded-md bg-stone-950 px-1.5 py-1 text-xs font-medium text-white">
            <Tooltip.Arrow />
            {label}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
