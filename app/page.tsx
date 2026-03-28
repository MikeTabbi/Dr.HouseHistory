import { DivisionCard } from "@/components/DivisionCard";

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
          <DivisionCard
            title="Media & Content"
            subtitle="Production"
            subtitleCaps
          />
          <DivisionCard title="House Legacy AI" titleAllCaps />
          <DivisionCard
            title="House Legacy Group"
            subtitle="Political Strategy & Civic Consulting"
          />
        </div>
      </div>
    </main>
  );
}
