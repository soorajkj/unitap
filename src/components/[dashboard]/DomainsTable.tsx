"use client";

import { Button } from "@base-ui/react/button";
import Image from "next/image";
import { cn } from "tailwind-variants";

const domains = [
  {
    id: 1,
    domain: "reddit.com",
    type: "UGC",
    typeColor: "bg-blue-100 text-blue-700",
    used: "32%",
    citations: "41%",
    icon: "https://www.google.com/s2/favicons?domain=reddit.com&sz=128",
  },
  {
    id: 2,
    domain: "techradar.com",
    type: "Editorial",
    typeColor: "bg-violet-100 text-violet-700",
    used: "43%",
    citations: "46%",
    icon: "https://www.google.com/s2/favicons?domain=techradar.com&sz=128",
  },
  {
    id: 3,
    domain: "wikipedia.org",
    type: "Reference",
    typeColor: "bg-violet-100 text-violet-700",
    used: "31%",
    citations: "40%",
    icon: "https://www.google.com/s2/favicons?domain=wikipedia.org&sz=128",
  },
  {
    id: 4,
    domain: "youtube.com",
    type: "UGC",
    typeColor: "bg-blue-100 text-blue-700",
    used: "39%",
    citations: "34%",
    icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
  },
  {
    id: 5,
    domain: "google.com",
    type: "Corporate",
    typeColor: "bg-pink-100 text-pink-700",
    used: "39%",
    citations: "34%",
    icon: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
];

export function DomainsTable() {
  return (
    <div className="flex h-full flex-col bg-white p-6">
      <div className="mb-6 flex items-center gap-4 border-gray-100 border-b pb-1 font-medium text-sm">
        <Button className="border-gray-900 border-b-2 px-1 pb-3 text-gray-900">
          Domains
        </Button>
        <Button className="px-1 pb-3 text-gray-400 transition-colors hover:text-gray-600">
          URLs
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-stone-100">
          <thead>
            <tr className="border-gray-100 border-b text-left font-medium text-gray-400 text-xs [&_th]:border-stone-100 [&_th]:border-r">
              <th className="w-8 p-2 font-normal">#</th>
              <th className="p-2 font-normal">Domain</th>
              <th className="p-2 font-normal">Type</th>
              <th className="p-2 font-normal">Used</th>
              <th className="p-2 font-normal">Avg. Citations</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {domains.map((item) => (
              <tr
                key={item.id}
                className="border-gray-50 border-b transition-colors last:border-0 hover:bg-gray-50/50 [&_td]:border-stone-100 [&_td]:border-r"
              >
                <td className="p-2 font-mono text-gray-400 text-xs">
                  {item.id}
                </td>
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt={item.domain}
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-full"
                    />
                    <span className="font-medium text-gray-900">
                      {item.domain}
                    </span>
                  </div>
                </td>
                <td className="p-2">
                  <span
                    className={cn(
                      "rounded px-2 py-0.5 font-semibold text-[11px] uppercase tracking-wide",
                      item.typeColor,
                    )}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="p-2 font-medium text-gray-700">{item.used}</td>
                <td className="p-2 font-medium text-gray-700">
                  {item.citations}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
