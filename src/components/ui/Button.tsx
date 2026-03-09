import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-secondary text-white hover:bg-secondary/90",
      outline:
        "border border-border bg-background hover:bg-muted hover:text-foreground",
      ghost: "hover:bg-muted hover:text-foreground",
      link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg",
      icon: "h-10 w-10",
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className,
    );

    if (asChild && React.isValidElement(children)) {
      // Filter out props that shouldn't be passed to children like Link or native tags
      const {
        variant: _v,
        size: _s,
        isLoading: _l,
        asChild: _a,
        className: childClassName,
        // Filter out motion props
        whileHover: _wh,
        whileTap: _wt,
        whileFocus: _wf,
        whileDrag: _wd,
        whileInView: _wiv,
        initial: _i,
        animate: _an,
        exit: _ex,
        transition: _tr,
        variants: _var,
        onAnimationStart: _oas,
        onAnimationComplete: _oac,
        onUpdate: _ou,
        layout: _lay,
        layoutId: _layId,
        ...rest
      } = props as any;

      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(classes, childClassName),
        ref,
        ...rest,
      });
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export const MotionButton = motion.create(Button);
