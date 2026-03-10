"use client";

import { useLinksQuery } from "@/hooks/useLinksQuery";
import ArchiveLinkControl from "./ArchiveLinkControl";

export default function LinksArchives() {
  const { data } = useLinksQuery();

  const archivedLinks = data?.filter((l) => l.archive) ?? [];

  if (!archivedLinks.length) return "No archives";

  return (
    <ul className="space-y-2">
      {archivedLinks.map((link) => (
        <li key={link.id} className="relative">
          <ArchiveLinkControl link={link} />
        </li>
      ))}
    </ul>
  );
}
