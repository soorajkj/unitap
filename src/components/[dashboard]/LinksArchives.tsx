"use client";

import { useLinksArchivesQuery } from "@/hooks/useLinksQuery";
import ArchiveLinkItem from "./ArchiveLinkItem";

export default function LinksArchives() {
  const { data: links } = useLinksArchivesQuery();

  if (!links.length) return "No archives";

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.id} className="relative">
          <ArchiveLinkItem link={link} />
        </li>
      ))}
    </ul>
  );
}
