import HeroSection from "@/components/home/hero-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background (stays behind everything on this page) */}
      <div
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(100, 123, 255, 0.5), transparent 70%), #fff",
        }}
      />

      {/* Content (Hero Section) */}
      <main className="relative z-10 min-h-[98vh] flex flex-col justify-center">
        <HeroSection />
      </main>
    </div>
  );
}
