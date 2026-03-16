import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "relative flex aspect-square size-4 shrink-0 rounded-full border border-gray-300 outline-none focus-visible:ring-2 focus-visible:ring-orange-300 data-[state=checked]:border-orange-500",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span className="flex size-3.5 items-center justify-center rounded-full bg-orange-500">
          <span className="size-1.5 rounded-full bg-white"></span>
        </span>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }