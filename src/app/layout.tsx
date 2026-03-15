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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
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
