"use client";

import { motion } from "framer-motion";
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
import {
  ExternalLink,
  Github,
  Smartphone,
  ShoppingBag,
  CreditCard,
  Calendar,
  Play,
  Apple,
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
];

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="My Work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        {feature}
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
      </div>
    </Section>
  );
}
