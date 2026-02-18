import {
  Analytics01Icon,
  Brush,
  Settings03Icon,
  Unlink02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Route } from "next";
import Link from "next/link";

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

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 w-full bg-white">
      <div className="flex h-14 items-center px-4">
        <ul className="flex items-center gap-1">
          {nav.map((n) => (
            <li key={n.label}>
              <Link
                href={n.href as Route}
                className="relative inline-flex h-8 shrink cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent px-3 py-2 text-sm text-stone-950 transition hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
              >
                <HugeiconsIcon icon={n.icon} strokeWidth={2} />
                <span>{n.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
