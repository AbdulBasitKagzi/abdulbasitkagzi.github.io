import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-6 lg:py-12 overflow-hidden scroll-mt-20 md:scroll-mt-24",
        className,
      )}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        {(title || subtitle) && (
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-3"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              >
                {title}
              </motion.h2>
            )}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1.5 bg-primary mt-4 rounded-full"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

// Fixed minor syntax error in comment
