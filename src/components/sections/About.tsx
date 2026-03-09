"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Badge } from "../ui/Badge";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Scalable Mobile Architectures",
  "API Integrations (REST, GraphQL, Supabase)",
  "Performance Optimization",
  "UI/UX Implementation",
  "Team Collaboration",
  "Clean Code Practices",
];

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Professional Background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">
            Passionate about creating high-performance <br />
            <span className="text-primary">mobile experiences.</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I am an experienced React Native Developer with over 3 years of
            industry experience at Propelius Technologies. My focus lies in
            building and maintaining production-ready mobile applications that
            are both scalable and user-centric.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in complex API integrations including Supabase,
            GraphQL, and REST APIs. I thrive in collaborative environments,
            working closely with designers and backend teams to deliver
            high-quality products that exceed client expectations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{strength}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="min-h-[400px] lg:h-full rounded-3xl bg-muted overflow-hidden relative border border-border">
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
              <div className="relative w-full h-full flex flex-col justify-center space-y-6 sm:space-y-8">
                <div className="bg-background/80 backdrop-blur p-4 sm:p-6 rounded-2xl border border-border shadow-sm transform -rotate-2 sm:-rotate-3 hover:rotate-0 transition-transform duration-500">
                  <span className="text-3xl sm:text-4xl font-bold text-primary italic">
                    3+
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Years Experience
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur p-4 sm:p-6 rounded-2xl border border-border shadow-sm transform translate-x-4 sm:translate-x-12 rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <span className="text-3xl sm:text-4xl font-bold text-secondary italic">
                    5+
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Major Projects
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur p-4 sm:p-6 rounded-2xl border border-border shadow-sm transform -translate-x-2 sm:-translate-x-4 rotate-0 sm:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <span className="text-3xl sm:text-4xl font-bold text-accent italic">
                    100%
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 h-24 w-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
