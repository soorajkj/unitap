import {
  Analytics01Icon,
  Brush,
  Settings03Icon,
  Unlink02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Route } from "next";
import Link from "next/link";
import UserActions from "./UserActions";

const nav = [
  {
    label: "Links",
    icon: Unlink02Icon,
    href: "/dashboard",
  },
  {
    label: "Apperance",
    icon: Brush,
    href: "/dashboard/apperance",
  },
  {
    label: "Analytics",
    icon: Analytics01Icon,
    href: "/dashboard/analytics",
  },
  {
    label: "Settings",
    icon: Settings03Icon,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="h-full w-64 bg-neutral-200/60">
      <div className="flex h-full flex-col">
        <div className="h-14 p-2">
          <UserActions />
        </div>
        <nav className="p-2">
          <ul className="grid w-full gap-px">
            {nav.map((n) => (
              <li key={n.label}>
                <Link
                  href={n.href as Route}
                  className="relative inline-flex h-8 w-full shrink cursor-pointer items-center gap-1 rounded-lg border border-transparent px-3 py-2 text-sm font-medium whitespace-nowrap text-neutral-950 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
                >
                  <HugeiconsIcon icon={n.icon} strokeWidth={2} />
                  <span>{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
