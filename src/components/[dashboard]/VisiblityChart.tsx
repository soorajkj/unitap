"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    hubspot: 20,
    salesforce: 15,
    attio: 10,
    zero: 5,
    pipedrive: 8,
  },
  {
    name: "Feb",
    hubspot: 25,
    salesforce: 18,
    attio: 15,
    zero: 8,
    pipedrive: 10,
  },
  {
    name: "Mar",
    hubspot: 45,
    salesforce: 35,
    attio: 28,
    zero: 15,
    pipedrive: 12,
  },
  {
    name: "Apr",
    hubspot: 72,
    salesforce: 65,
    attio: 54,
    zero: 33,
    pipedrive: 28,
  },
  {
    name: "May",
    hubspot: 75,
    salesforce: 62,
    attio: 58,
    zero: 30,
    pipedrive: 26,
  },
  {
    name: "Jun",
    hubspot: 80,
    salesforce: 60,
    attio: 62,
    zero: 35,
    pipedrive: 25,
  },
];

export function VisibilityChart() {
  return (
    <div className="flex h-full flex-col bg-white p-6">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">Domains by Type</h3>
          <p className="mt-1 text-gray-500 text-sm">
            Most used domains categorized by type
          </p>
        </div>
        <button
          type="button"
          tabIndex={0}
          className="rounded-lg p-2 text-gray-400 hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-up-right h-4 w-4"
            aria-hidden="true"
          >
            <path d="M13 5H19V11" />
            <path d="M19 5L5 19" />
          </svg>
        </button>
      </div>

      <div className="min-h-80 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              dy={10}
            />
            <YAxis hide domain={[0, 100]} />
            <Tooltip cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }} />
            <Line
              type="monotone"
              dataKey="hubspot"
              name="HubSpot"
              stroke="#ff5c35"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="salesforce"
              name="Salesforce"
              stroke="#00a1e0"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="attio"
              name="Attio"
              stroke="#000000"
              strokeWidth={2}
              dot={{ r: 4, fill: "white", stroke: "black", strokeWidth: 2 }}
              activeDot={{ r: 6, fill: "black" }}
            />
            <Line
              type="monotone"
              dataKey="zero"
              name="Zero"
              stroke="#fbbf24"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="pipedrive"
              name="Pipedrive"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
