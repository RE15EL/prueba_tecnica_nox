import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#718096] text-[#ffffff] shadow hover:bg-[#718096] hover:text-white",
        primary:
          "border-[#3182CE] bg-transparent text-[#2B6CB0] shadow hover:bg-[#3182CE] hover:text-white",
        warning:
          "border-[#DD6B20] bg-transparent text-[#C05621] shadow hover:bg-[#DD6B20] hover:text-white",
        success:
          "border-[#38A169] bg-transparent text-[#25855A] shadow hover:bg-[#38A169] hover:text-white",
        destructive:
          "border-[#E53E3E] bg-transparent text-[#C53030] shadow hover:bg-[#E53E3E] hover:text-white",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
