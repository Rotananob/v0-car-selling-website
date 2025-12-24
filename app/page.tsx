import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SearchFilters } from "@/components/search-filters"
import { FeaturedCars } from "@/components/featured-cars"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <SearchFilters />
          <FeaturedCars />
        </div>
      </main>
      <Footer />
    </div>
  )
}
