"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const featuredRepos = [
  {
    name: "Eatvisor",
    stars: 12,
    forks: 4,
    description: "React Native & Supabase nutrition management app.",
    url: "https://github.com/AbdulBasitKagzi",
  },
  {
    name: "JhaPay",
    stars: 8,
    forks: 2,
    description: "Digital payments integration with Stripe.",
    url: "https://github.com/AbdulBasitKagzi",
  },
];

export function GitHubActivity() {
  return (
    <Section id="github" title="Open Source" subtitle="GitHub Activity">
      <div className="flex flex-col items-center space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {featuredRepos.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/50 group">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Github size={18} className="text-primary" />
                    <CardTitle className="text-lg">{repo.name}</CardTitle>
                  </div>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </a>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-500" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} className="text-secondary" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-1 rounded-2xl bg-muted overflow-hidden border border-border mb-8 max-w-full overflow-x-auto">
            {/* Simple mock contribution graph */}
            <div className="flex gap-1 p-4 bg-background rounded-xl">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, j) => {
                    const intensity = Math.floor(Math.random() * 4);
                    const colors = [
                      "bg-muted",
                      "bg-primary/30",
                      "bg-primary/60",
                      "bg-primary",
                    ];
                    return (
                      <div
                        key={j}
                        className={`w-3 h-3 rounded-[2px] ${colors[intensity]} transition-all hover:scale-125 hover:z-10`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <Button variant="outline" className="rounded-full px-8" asChild>
            <a
              href="https://github.com/AbdulBasitKagzi"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
