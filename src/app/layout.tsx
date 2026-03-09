import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdulbasit Kagzi | React Native Developer",
  description:
    "Portfolio of Abdulbasit Kagzi, an experienced React Native Developer specializing in scalable mobile applications.",
  keywords: [
    "React Native",
    "Mobile Developer",
    "Abdulbasit Kagzi",
    "Supabase",
    "GraphQL",
    "Surat",
    "India",
  ],
  authors: [{ name: "Abdulbasit Kagzi" }],
  openGraph: {
    title: "Abdulbasit Kagzi | React Native Developer",
    description:
      "Experienced React Native Developer building production-ready mobile apps.",
    url: "https://github.com/AbdulBasitKagzi",
    siteName: "Abdulbasit Kagzi Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
