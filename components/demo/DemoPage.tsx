import { ApiAccess } from "@/components/demo/ApiAccess";
import { ArchitectureSection } from "@/components/demo/ArchitectureSection";
import { ConversationDemo } from "@/components/demo/ConversationDemo";
import { DemoChatbot } from "@/components/demo/DemoChatbot";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHero } from "@/components/demo/DemoHero";
import { DemoNav } from "@/components/demo/DemoNav";
import { DemoVideo } from "@/components/demo/DemoVideo";
import { FinalCTA } from "@/components/demo/FinalCTA";
import { ImplementationSection } from "@/components/demo/ImplementationSection";
import { ProblemSection } from "@/components/demo/ProblemSection";
import { PrototypeCTA } from "@/components/demo/PrototypeCTA";
import { RoadmapSection } from "@/components/demo/RoadmapSection";
import { SolutionSection } from "@/components/demo/SolutionSection";
import { TeamSection } from "@/components/demo/TeamSection";
import { WhyUsSection } from "@/components/demo/WhyUsSection";
import { WorkflowSection } from "@/components/demo/WorkflowSection";

export function DemoPage() {
  return (
    <div className="landing-page demo-page min-h-screen bg-white text-[var(--lp-text)]">
      <DemoNav />
      <main>
        <DemoHero />
        <ProblemSection />
        <SolutionSection />
        <WorkflowSection />
        <ConversationDemo />
        <ArchitectureSection />
        <ImplementationSection />
        <RoadmapSection />
        <TeamSection />
        <WhyUsSection />
        <DemoVideo />
        <PrototypeCTA />
        <ApiAccess />
        <FinalCTA />
      </main>
      <DemoFooter />
      <DemoChatbot />
    </div>
  );
}
