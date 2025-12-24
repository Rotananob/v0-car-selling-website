import { CarCard } from "@/components/car-card"

const cars = [
  {
    id: 1,
    make: "Tesla",
    model: "Model 3",
    year: 2024,
    price: 42990,
    mileage: 1200,
    image: "/tesla-model-3-sleek-electric-sedan.jpg",
    condition: "New",
    transmission: "Automatic",
    fuelType: "Electric",
  },
  {
    id: 2,
    make: "BMW",
    model: "3 Series",
    year: 2023,
    price: 45500,
    mileage: 8500,
    image: "/bmw-3-series-luxury-sedan.jpg",
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 3,
    make: "Mercedes-Benz",
    model: "GLE 350",
    year: 2024,
    price: 68900,
    mileage: 500,
    image: "/mercedes-gle-suv-luxury.jpg",
    condition: "New",
    transmission: "Automatic",
    fuelType: "Hybrid",
  },
  {
    id: 4,
    make: "Audi",
    model: "Q5",
    year: 2023,
    price: 52300,
    mileage: 12000,
    image: "/audi-q5-suv-premium.jpg",
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 5,
    make: "Toyota",
    model: "Camry",
    year: 2024,
    price: 28750,
    mileage: 2100,
    image: "/toyota-camry-sedan-reliable.jpg",
    condition: "New",
    transmission: "Automatic",
    fuelType: "Hybrid",
  },
  {
    id: 6,
    make: "Honda",
    model: "CR-V",
    year: 2023,
    price: 32900,
    mileage: 15000,
    image: "/honda-crv-suv-family.jpg",
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
]

export function FeaturedCars() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Vehicles</h2>
          <p className="text-muted-foreground mt-1">Browse our handpicked selection of quality cars</p>
        </div>
        <p className="text-sm text-muted-foreground">{cars.length} vehicles available</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
