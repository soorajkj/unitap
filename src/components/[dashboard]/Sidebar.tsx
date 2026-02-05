"use client";

import {
  Box,
  Database,
  LayoutDashboard,
  type LucideIcon,
  MessageSquare,
  Settings,
} from "lucide-react";
import { cn } from "tailwind-variants";

export default function Sidebar() {
  return (
    <aside className="w-full max-w-64">
      <div className="flex size-full flex-col">
        <div className="h-12"></div>
        <div className="flex w-full p-2">
          <div className="w-full space-y-px">
            <div className="mb-2 px-3 font-medium text-stone-400 text-xs uppercase tracking-wider">
              Pages
            </div>
            <SidebarItem icon={LayoutDashboard} label="Overview" isActive />
            <SidebarItem icon={MessageSquare} label="Prompts" />
            <SidebarItem icon={Database} label="Sources" />
            <SidebarItem icon={Box} label="Models" />
            <SidebarItem icon={Settings} label="Settings" />
          </div>
        </div>
      </div>
    </aside>
  );
}

const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
}: {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 font-medium text-sm transition-colors",
        isActive
          ? "bg-stone-200/50 text-stone-900"
          : "text-stone-600 hover:bg-stone-100 hover:text-stone-900",
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
};
