import { DemoPage } from "@/components/demo/DemoPage";
import { demoMeta } from "@/lib/landing/demo-config";
import type { Metadata } from "next";
import "@/app/landing.css";
import "@/app/demo.css";

export const metadata: Metadata = {
  title: demoMeta.title,
  description: demoMeta.description,
};

export default function DemoRoute() {
  return <DemoPage />;
}
