import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Gauge, Fuel, Settings, Heart } from "lucide-react"

interface CarCardProps {
  car: {
    id: number
    make: string
    model: string
    year: number
    price: number
    mileage: number
    image: string
    condition: string
    transmission: string
    fuelType: string
  }
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={`${car.year} ${car.make} ${car.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={car.condition === "New" ? "default" : "secondary"}>{car.condition}</Badge>
        </div>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-balance">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-2xl font-bold text-primary mt-1">${car.price.toLocaleString()}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1">View Details</Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          Contact Dealer
        </Button>
      </CardFooter>
    </Card>
  )
}
