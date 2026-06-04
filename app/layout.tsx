import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rutuja Deshmukh | AI Engineer — Generative AI • RAG • Multi-Agent Systems",
  description:
    "AI Engineer specializing in Generative AI, RAG pipelines, Multi-Agent Systems, LangGraph workflows, and intelligent AI applications. Building production-style AI systems.",
  keywords: [
    "AI Engineer", "Generative AI", "RAG", "LangChain", "LangGraph",
    "Multi-Agent Systems", "Python", "FastAPI", "ChromaDB", "LLM Applications",
    "Rutuja Deshmukh", "AI Portfolio",
  ],
  authors: [{ name: "Rutuja Deshmukh" }],
  openGraph: {
    title: "Rutuja Deshmukh | AI Engineer",
    description: "Building intelligent AI systems with RAG, LangGraph, and modern AI stacks.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutuja Deshmukh | AI Engineer",
    description: "Building intelligent AI systems with RAG, LangGraph, and modern AI stacks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
