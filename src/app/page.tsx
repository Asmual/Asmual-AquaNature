import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionHeading
        badge="Welcome"
        title="Hello World"
        subtitle="Explore our exotic fishes, rare aquatic plants, and artistic aquascaping collections."
        viewAllHref="#"
        viewAllText="Explore Catalog"
      />
    </main>
  );
}
