import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Find Your Perfect <span className="text-primary">Vehicle</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Browse thousands of quality cars from trusted dealers. Your dream car is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base">
              <Search className="mr-2 h-5 w-5" />
              Browse Inventory
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Get Pre-Approved
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
