import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive motion-safe:hover:transform",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-lg motion-safe:hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-lg focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-border bg-background shadow-sm hover:bg-surface-hover hover:text-foreground hover:border-accent",
        secondary:
          "bg-surface-elevated text-foreground shadow-sm hover:bg-surface-hover hover:shadow-lg",
        ghost:
          "hover:bg-surface-hover hover:text-foreground",
        "ghost-on-bright":
          "bg-background/10 backdrop-blur-sm text-text-inverse hover:bg-background/20 border border-background/20 hover:border-background/40",
        link: "text-accent underline-offset-4 hover:underline hover:text-accent/80",
        accent:
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 hover:shadow-glow-primary motion-safe:hover:-translate-y-0.5",
        gradient:
          "bg-gradient-to-r from-accent-primary to-accent-secondary text-accent-foreground shadow-sm hover:shadow-glow-primary motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-105",
        inverted:
          "bg-background text-foreground shadow-sm hover:bg-surface-elevated border border-border hover:shadow-lg motion-safe:hover:-translate-y-0.5",
        glass:
          "bg-foreground/10 backdrop-blur-sm text-text-inverse border border-foreground/20 hover:bg-foreground/20 hover:border-foreground/40 shadow-sm",
        success:
          "bg-success text-success-foreground shadow-sm hover:bg-success/90 hover:shadow-glow-success motion-safe:hover:-translate-y-0.5",
        warning:
          "bg-warning text-warning-foreground shadow-sm hover:bg-warning/90 motion-safe:hover:-translate-y-0.5",
        info:
          "bg-info text-info-foreground shadow-sm hover:bg-info/90 hover:shadow-glow-secondary motion-safe:hover:-translate-y-0.5",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-xl px-8 py-4 text-lg has-[>svg]:px-6",
        hero: "h-12 rounded-md px-8 py-3 text-lg has-[>svg]:px-6 min-h-[48px]",
        icon: "size-9",
      },
      layout: {
        default: "",
        wide: "min-w-[200px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      layout: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  layout,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, layout }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
