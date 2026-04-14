import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] active:scale-[0.97]",
        secondary:
          "bg-[var(--surface-1)] text-[var(--text-primary)] border border-[var(--border-strong)] hover:bg-[var(--surface-2)] active:scale-[0.97]",
        ghost:
          "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] active:scale-[0.97]",
      },
      size: {
        sm: "px-4 py-1.5 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
