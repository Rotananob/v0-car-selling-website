"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"

export function SearchFilters() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <Card className="p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="make">Make</Label>
          <Select>
            <SelectTrigger id="make">
              <SelectValue placeholder="Any Make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tesla">Tesla</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Model</Label>
          <Select>
            <SelectTrigger id="model">
              <SelectValue placeholder="Any Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="model-s">Model S</SelectItem>
              <SelectItem value="model-3">Model 3</SelectItem>
              <SelectItem value="model-x">Model X</SelectItem>
              <SelectItem value="model-y">Model Y</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Max Price</Label>
          <Select>
            <SelectTrigger id="price">
              <SelectValue placeholder="Any Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20000">$20,000</SelectItem>
              <SelectItem value="30000">$30,000</SelectItem>
              <SelectItem value="50000">$50,000</SelectItem>
              <SelectItem value="75000">$75,000</SelectItem>
              <SelectItem value="100000">$100,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end gap-2">
          <Button className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="Any Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mileage">Max Mileage</Label>
            <Select>
              <SelectTrigger id="mileage">
                <SelectValue placeholder="Any Mileage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25000">25,000 mi</SelectItem>
                <SelectItem value="50000">50,000 mi</SelectItem>
                <SelectItem value="75000">75,000 mi</SelectItem>
                <SelectItem value="100000">100,000 mi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="body">Body Type</Label>
            <Select>
              <SelectTrigger id="body">
                <SelectValue placeholder="Any Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="coupe">Coupe</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </Card>
  )
}
