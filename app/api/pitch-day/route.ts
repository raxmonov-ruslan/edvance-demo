import { NextResponse } from "next/server";
import { demoConfig, demoMeta, roadmapStages } from "@/lib/landing/demo-config";

export async function GET() {
  return NextResponse.json({
    project: "EDVANCE",
    event: "Pitch Day 3.0",
    stage: "1-bosqich",
    title: demoMeta.title,
    description: demoMeta.description,
    links: {
      demo: "/demo",
      home: "/",
      demoVideo: demoConfig.videoUrl,
      prototype: demoConfig.prototypeUrl,
      github: demoConfig.githubUrl,
    },
    roadmap: roadmapStages.map((s) => ({
      id: s.id,
      label: s.label,
      status: s.status,
      summary: s.summary,
    })),
  });
}
