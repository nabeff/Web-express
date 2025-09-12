"use client";

import React from "react";

export default function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none tracking-tight">
      {label}
    </span>
  );
}
