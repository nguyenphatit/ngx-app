"use client";

import dynamic from "next/dynamic";

const ChatterComponent = dynamic(() => import('./chatter-main'), {
  ssr: false,
});

export default function ClientChatterWrapper() {
  return <ChatterComponent />;
}