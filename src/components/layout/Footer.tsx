"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(
    new Date().getFullYear(),
  );

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              ABK<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              React Native Developer building scalable and high-performance
              mobile experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/AbdulBasitKagzi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulbasit-kagzi-24a0a1221/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:abdulbasit.codes@gmail.com"
                className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Abdulbasit Kagzi. All rights reserved.
            </p>
          </div>
        </div>

        {/* <div className="mt-12 pt-8 border-t border-border/50 flex flex-col items-center justify-center gap-2">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" />{" "}
            using Next.js, Tailwind CSS & Framer Motion
          </p>
        </div> */}
      </div>
    </footer>
  );
}
