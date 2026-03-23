"use client";

import { Tabs } from "@base-ui/react/tabs";
import { Archive03Icon, Layers01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import Links from "./Links";
import LinksArchives from "./LinksArchives";

const VIEWS = [
  {
    id: "all",
    label: "All",
    icon: Layers01Icon,
    content: <Links />,
    disabled: false,
  },
  {
    id: "archived",
    label: "Archived",
    icon: Archive03Icon,
    content: <LinksArchives />,
    disabled: false,
  },
] as const;

type View = (typeof VIEWS)[number]["id"];

export default function LinksViews() {
  const [view, setView] = useState<View>("all");

  return (
    <Tabs.Root value={view} onValueChange={setView}>
      <Tabs.List className="mb-4 flex overflow-hidden rounded-xl bg-neutral-200/40 p-1">
        {VIEWS.map((view) => (
          <Tabs.Tab
            key={view.id}
            value={view.id}
            className="flex h-8 flex-1 cursor-pointer items-center justify-center gap-1 rounded-lg border-0 px-2 text-sm font-medium break-keep whitespace-nowrap text-neutral-800 outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm before:outline-blue-800 hover:text-neutral-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:outline data-active:bg-white data-active:shadow-2xs [&_svg]:size-4"
            disabled={view.disabled}
          >
            <HugeiconsIcon icon={view.icon} />
            {view.label}
          </Tabs.Tab>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {VIEWS.map((view) => (
        <Tabs.Panel key={view.id} value={view.id}>
          {view.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
