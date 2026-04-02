import { DivisionCard } from "@/components/DivisionCard";
import houseLegacy from "@/assets/HouseLegacy.png";
import houseLegacyAi from "@/assets/HouseLegacyAI.png";
import mediaContent from "@/assets/Media-Content.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            House Legacy Group
          </h1>
          <p className="mt-4 text-lg text-neutral-500">
            Subcontractor Portal — Coming Soon
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DivisionCard image={mediaContent} alt="Media and Content" />
          <DivisionCard image={houseLegacyAi} alt="House Legacy AI" />
          <DivisionCard image={houseLegacy} alt="House Legacy Group" />
        </div>
      </div>
    </main>
  );
}
