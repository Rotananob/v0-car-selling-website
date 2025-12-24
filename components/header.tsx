import Link from "next/link"
import { Car, Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">AutoMarket</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#inventory"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Inventory
          </Link>
          <Link
            href="#financing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Financing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favorites</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button className="hidden sm:inline-flex">Sell Your Car</Button>
        </div>
      </div>
    </header>
  )
}
