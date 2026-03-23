"use client";

import { Button } from "@base-ui/react/button";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { cn } from "tailwind-variants";

const competitors = [
  {
    id: 1,
    name: "HubSpot",
    visibility: "65%",
    sentiment: 86,
    position: 2.7,
    logo: "S",
    color: "bg-violet-500",
  },
  {
    id: 2,
    name: "Salesforce",
    visibility: "62%",
    sentiment: 62,
    position: 2.9,
    logo: "C",
    color: "bg-blue-500",
    sentTrend: -0.2,
    posTrend: -0.1,
  },
  {
    id: 3,
    name: "Attio",
    visibility: "47%",
    sentiment: 89,
    position: 3.6,
    logo: "A",
    color: "bg-black",
    visTrend: 0.3,
  },
  {
    id: 4,
    name: "Pipedrive",
    visibility: "41%",
    sentiment: 76,
    position: 3.9,
    logo: "P",
    color: "bg-green-500",
    visTrend: -0.3,
  },
  {
    id: 5,
    name: "Zero",
    visibility: "28%",
    sentiment: 88,
    position: 2.3,
    logo: "Z",
    color: "bg-yellow-400",
    sentTrend: 0.4,
    posTrend: 0.2,
  },
];

const Trend = ({ value }: { value?: number }) => {
  if (!value) return null;
  const isPositive = value > 0;

  return (
    <div
      className={cn(
        "ml-2 flex items-center gap-0.5 text-xs font-medium",
        isPositive ? "text-green-500" : "text-red-500",
      )}
    >
      {isPositive ? (
        <ArrowUpRight className="h-3 w-3" />
      ) : (
        <ArrowDownRight className="h-3 w-3" />
      )}
      {Math.abs(value)}
    </div>
  );
};

export function CompetitorsTable() {
  return (
    <div className="flex h-full flex-col bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-neutral-900">
            Attio&apos;s competitors
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Compare Attio with it&apos;s competitors
          </p>
        </div>
        <Button className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-50">
          <MoveUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-neutral-100">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium text-neutral-400 [&_th]:border-r [&_th]:border-neutral-100">
              <th className="w-8 p-2 font-normal">#</th>
              <th className="p-2 font-normal">Brand</th>
              <th className="p-2 font-normal">Visibility</th>
              <th className="p-2 font-normal">Sentiment</th>
              <th className="p-2 font-normal">Position</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {competitors.map((item) => (
              <tr
                key={item.id}
                className="border-b border-neutral-50 transition-colors last:border-0 hover:bg-neutral-50/50 [&_td]:border-r [&_td]:border-neutral-100"
              >
                <td className="p-2 font-mono text-xs text-neutral-400">
                  {item.id}
                </td>
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-4 items-center justify-center rounded text-[10px] font-bold text-white",
                        item.color,
                      )}
                    >
                      {item.logo}
                    </div>
                    <span className="font-medium text-neutral-900">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="font-medium text-neutral-600">
                      {item.visibility}
                    </span>
                    <Trend value={item.visTrend} />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-700",
                      )}
                    >
                      {item.sentiment}
                    </span>
                    <Trend value={item.sentTrend} />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-700",
                      )}
                    >
                      #{item.position}
                    </span>
                    <Trend value={item.posTrend} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
