"use client";

import { Button } from "@base-ui/react/button";
import { MoveUpRight } from "lucide-react";
import {
  Pie,
  PieChart,
  type PieSectorShapeProps,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";
import { cn } from "tailwind-variants";

const data = [
  { name: "UGC", value: 12, color: "#2563eb" }, // Blue
  { name: "Editorial", value: 35, color: "#6366f1" }, // Indigo
  { name: "Corporate", value: 20, color: "#9333ea" }, // Purple
  { name: "Competitor", value: 15, color: "#db2777" }, // Pink
  { name: "Others", value: 18, color: "#e5e7eb" }, // Gray
];

const MyCustomPie = (props: PieSectorShapeProps) => (
  <Sector {...props} fill={props.color} />
);

export function DomainsChart() {
  return (
    <div className="flex h-full flex-col bg-white p-6">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">Domains by Type</h3>
          <p className="mt-1 text-gray-500 text-sm">
            Most used domains categorized by type
          </p>
        </div>
        <Button className="rounded-lg p-2 text-gray-400 hover:bg-gray-50">
          <MoveUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-1 items-center gap-8">
        <div className="relative h-48 w-48 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                cornerRadius={4}
                stroke="none"
                shape={MyCustomPie}
              >
                {/* {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))} */}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-bold text-2xl text-gray-900">12%</span>
            <span className="font-semibold text-blue-600 text-xs uppercase tracking-wide">
              UGC
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="grid flex-1 grid-cols-2 gap-x-2 gap-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-xs"
                style={{ backgroundColor: item.color }}
              />
              <span
                className={cn(
                  "font-medium text-xs",
                  item.name === "Competitor"
                    ? "text-pink-700"
                    : "text-gray-600",
                )}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
