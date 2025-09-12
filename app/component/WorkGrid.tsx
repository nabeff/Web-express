"use client";

import React, { useMemo, useState } from "react";
import WorkCard, { WorkItem } from "./WorkCard";

export default function WorkGrid({ items }: { items: WorkItem[] }) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const tags = useMemo(() => {
    const all = new Set<string>();
    items.forEach((i) => i.tags.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all)];
  }, [items]);

  const filtered = activeTag === "All" ? items : items.filter((i) => i.tags.includes(activeTag));

  return (
    <section className="container m-auto py-12 md:py-16">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {tags.map((t) => (
          <button
            key={t}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              activeTag === t ? "bg-black text-white" : ""
            }`}
            onClick={() => setActiveTag(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {filtered.map((item, idx) => (
          <WorkCard key={item.slug} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
