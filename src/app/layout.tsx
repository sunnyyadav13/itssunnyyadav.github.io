import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnyyadav13.github.io"),
  title: "Sunny Yadav | Software Engineer",
  description:
    "Portfolio and resume website for Sunny Yadav, a software engineer focused on full-stack development, backend systems, and scalable web experiences.",
  keywords: [
    "Sunny Yadav",
    "Software Engineer",
    "Full Stack Developer",
    "Java Spring Boot",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Sunny Yadav | Software Engineer",
    description:
      "Explore Sunny Yadav's experience, projects, certifications, and resume.",
    url: "https://sunnyyadav13.github.io",
    siteName: "Sunny Yadav",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Yadav | Software Engineer",
    description:
      "Portfolio and resume website for Sunny Yadav, software engineer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sourceSerif.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
