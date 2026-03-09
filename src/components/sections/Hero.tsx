"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, MotionButton } from "@/components/ui/Button";
import {
  ArrowRight,
  Download,
  Code2,
  Smartphone,
  Cpu,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  "React Native",
  "Supabase",
  "GraphQL",
  "REST APIs",
  "TypeScript",
];

export function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-[80vh] flex items-center pt-24 md:pt-32 lg:pt-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center self-center lg:self-start space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Building Seamless <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Mobile Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Hi, I'm{" "}
              <span className="text-foreground font-semibold">
                Abdulbasit Kagzi
              </span>
              , an experienced React Native Developer specializing in
              high-performance, scalable production-ready applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <MotionButton
                size="lg"
                className="w-full sm:w-auto group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                asChild
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MotionButton>
              <MotionButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                asChild
              >
                <a href="/resume.pdf" download>
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </MotionButton>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8 text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center"
                  >
                    {i === 1 && <Smartphone className="h-5 w-5" />}
                    {i === 2 && <Cpu className="h-5 w-5" />}
                    {i === 3 && <Globe className="h-5 w-5" />}
                    {i === 4 && <Code2 className="h-5 w-5" />}
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                Expert in{" "}
                <span className="text-primary">{skills[skillIndex]}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0"
          >
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-muted/50 to-background flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/50" />
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/hero-avatar.webp"
                  alt="Abdulbasit Kagzi Avatar"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 left-4 sm:top-8 sm:left-6 lg:top-10 lg:left-10 p-2 sm:p-3 lg:p-4 rounded-2xl bg-background shadow-lg border border-border"
              >
                <Smartphone className="h-8 w-8 sm:h-8 sm:w-8 lg:h-8 lg:w-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="hidden lg:block absolute bottom-10 right-10 p-4 rounded-2xl bg-background shadow-lg border border-border"
              >
                <Code2 className="h-8 w-8 text-secondary" />
              </motion.div>
            </div>

            {/* Decorative Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 sm:-bottom-6 lg:-bottom-6 -right-3 sm:-right-4 lg:-left-12 p-3 sm:p-4 lg:p-6 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-xl max-w-[180px] sm:max-w-[180px] lg:max-w-[280px] xl:max-w-[320px] z-20"
            >
              <div className="flex items-center space-x-2 sm:space-x-2 lg:space-x-3 mb-1 sm:mb-1 lg:mb-2">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 lg:h-2.5 lg:w-2.5 rounded-full bg-green-500" />

                <span className="text-[9px] sm:text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  React Native Specialist
                </span>
              </div>

              <p className="text-[10px] sm:text-[11px] lg:text-sm xl:text-base font-medium leading-tight lg:leading-normal">
                Over 3 years of professional experience building native-quality
                apps.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
