import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ServicesShowcase />
      <div className="container mx-auto px-4">
        {/* Future sections */}
      </div>
    </main>
  );
}
