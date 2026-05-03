"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ExternalLink,
  Github,
  Smartphone,
  ShoppingBag,
  CreditCard,
  Calendar,
  Play,
  Apple,
  Activity,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  tech: { name: string; icon: string }[];
  icon: React.ReactNode;
  features: string[];
  playStore?: string;
  appStore?: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "Harrir",
    description: "E-Commerce Mobile Application (Iraq)",
    tech: [
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Zustand", icon: "" },
      { name: "MMKV", icon: "" },
      { name: "TanStack Query", icon: "" },
    ],
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    features: [
      "Improved performance by 75% optimizing state & storage",
      "Migrated from Redux to Zustand and MMKV",
      "TanStack Query for API caching",
      "Infinite scrolling & optimized loading",
      "Firebase push notifications & invoice generation",
      "Analytics: Mixpanel, Meta Events Manager, Singular",
      "Personalized product recommendations",
    ],
  },
  {
    name: "Armbrella",
    description: "Fitness Coaching App",
    tech: [
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Redux Toolkit", icon: "devicon-redux-original colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "RevenueCat", icon: "" },
    ],
    icon: <Activity className="h-6 w-6 text-secondary" />,
    features: [
      "Subscription-based platform (Professionals & Clients)",
      "RevenueCat for in-app subscriptions",
      "AI meal tracker, diet plans & fitness tracking",
      "Fitness calculators (BMI, Body Fat, TDEE)",
      "Short-video feed based on user goals",
      "Firebase push notifications",
      "Analytics dashboard for professionals",
    ],
  },
  {
    name: "Lompa",
    description:
      "Reels-based E-Commerce Platform with product tagging in videos and real-time chat.",
    tech: [
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "GraphQL", icon: "devicon-graphql-plain colored" },
      { name: "Real-time Chat", icon: "" },
    ],
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    features: ["Reels-based shopping", "Product tagging", "Order management"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.app.lompamarketplace&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/lompa/id6742741600",
    // url: "https://lompa.in",
  },
  {
    name: "Eatvisor",
    description:
      "Nutrition & Health Management App featuring diet tracking, doctor/client roles, and real-time data sync.",
    tech: [
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
      { name: "Real-time Sync", icon: "" },
    ],
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    features: [
      "Diet tracking",
      "Doctor & Client roles",
      "Appointment scheduling",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.propelius.eatvisor&hl=en_IN",
    appStore:
      "https://apps.apple.com/in/app/eatvisor-by-shalini-bansal/id6462085934",
    // url: "https://eatvisor.com",
  },
  {
    name: "Boxio",
    description:
      "Club Event & Ticketing Platform with event booking, discovery, and rewards system.",
    tech: [
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "UI/UX", icon: "devicon-figma-plain colored" },
      { name: "Payment Gateway", icon: "" },
    ],
    icon: <Calendar className="h-6 w-6 text-accent" />,
    features: ["Event ticket booking", "Club discovery", "Rewards system"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.beach_box_ventures&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/boxio/id6504992373",
    // url: "https://boxio.in",
  },
  {
    name: "JhaPay",
    description:
      "Digital Payments App with QR code payments, restaurant wallet, and Stripe integration.",
    tech: [
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
      { name: "Stripe", icon: "" },
      { name: "Biometric", icon: "" },
    ],
    icon: <CreditCard className="h-6 w-6 text-secondary" />,
    features: ["QR code payments", "Restaurant wallet", "Stripe integration"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.app.jhapay&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/jhapay/id6746750181",
    // url: "https://jhapay.com",
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Section id="projects" title="Featured Projects" subtitle="My Work">
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle>{project.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((t, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-[10px] flex items-center gap-1 cursor-default"
                        >
                          {t.icon && <i className={`${t.icon} text-xs`} />}
                          {t.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-6">
                    {project.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Key Features
                    </p>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/50 pt-4 mt-auto">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2">
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md bg-muted/50 hover:bg-primary/5"
                        >
                          <i className="fab fa-google-play" />
                          Play Store
                        </a>
                      )}
                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-secondary transition-colors py-1 px-2 rounded-md bg-muted/50 hover:bg-secondary/5"
                        >
                          <i className="devicon-apple-original dark:text-white text-sm" />
                          App Store
                        </a>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > 4 && (
        <motion.div 
          layout
          className="mt-12 flex justify-center"
        >
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 rounded-full px-6"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                View More Projects
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>
      )}
    </Section>
  );
}
