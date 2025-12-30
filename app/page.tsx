import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenue sur Yatout Showcase
        </h1>
        <div className="h-[200px]" /> {/* Spacer for scroll testing */}
      </div>
    </main>
  );
}
