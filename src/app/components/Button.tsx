"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
