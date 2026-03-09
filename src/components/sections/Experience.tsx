"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "React Native Developer",
    company: "Propelius Technologies",
    location: "Surat, Gujarat, India",
    period: "Mar 2023 – Present",
    description:
      "Building and maintaining production-ready mobile applications using React Native. Focused on scalable architectures and complex API integrations.",
    achievements: [
      "Built and maintained production-ready React Native applications",
      "Implemented scalable mobile architectures",
      "Integrated Supabase, GraphQL, and REST APIs",
      "Collaborated with designers and backend teams",
      "Optimized app performance and stability",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Work Journey" subtitle="Experience">
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 pb-12 last:pb-0 border-l border-border ml-4"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} className="text-primary" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-bold text-primary border border-border shrink-0 md:self-start">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>
            </div>

            <Card className="bg-muted/30 border-none shadow-none">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {exp.achievements.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
