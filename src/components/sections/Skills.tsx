"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Smartphone, Database, Server, Code2, Layers, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Mobile",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    skills: ["React Native", "JavaScript", "TypeScript", "React Navigation"],
  },
  {
    title: "Backend & Data",
    icon: <Database className="h-6 w-6 text-secondary" />,
    skills: ["Supabase", "GraphQL", "REST APIs", "SQL"],
  },
  {
    title: "Development Tools",
    icon: <Zap className="h-6 w-6 text-accent" />,
    skills: ["Git", "Postman", "Figma", "Firebase"],
  },
  {
    title: "Other Skills",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: [
      "Redux / Context API",
      "Styling (CSS, Tailwind)",
      "Next.js",
      "App Deployment",
    ],
  },
  {
    title: "AI Tools",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    skills: ["Cursor", "Antigravity", "Claude", "ChatGPT"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Arsenal"
      subtitle="Skills & Expertise"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col items-center text-center group">
              <div className="p-3 rounded-2xl bg-muted mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-background border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
