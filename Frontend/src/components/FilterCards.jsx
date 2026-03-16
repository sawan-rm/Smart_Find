import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import React from "react"

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0 - 40k", "42k - 1 lakh", "1 lakh to 5 lakh"]
  },
]

const FilterCards = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index} className="mt-4">
            <h1 className="font-bold text-lg mb-2">{data.filterType}</h1>

            {data.array.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-1">
                <RadioGroupItem value={item} id={item} className="border-gray-400 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 focus:ring-orange-400"/>
                <Label htmlFor={item}>{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCards