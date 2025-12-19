import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn, portableTextToPlainText } from "@/lib/utils";
import { getAuthorData } from "@/lib/data";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const author = await getAuthorData();

  if (!author) {
    return {
      title: "Portfolio",
      description: "Personal portfolio website",
    };
  }

  const url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    metadataBase: new URL(url),
    title: {
      default: author.name ?? "",
      template: `%s | ${author.name}`,
    },
    description: portableTextToPlainText(author.description!),
    icons: {
      icon: author.avatar?.asset?.url 
        ? [{ url: author.avatar.asset.url, type: "image/jpeg", sizes: "any" }]
        : "/favicon.ico",
      shortcut: author.avatar?.asset?.url || "/favicon.ico",
      apple: author.avatar?.asset?.url
        ? [{ url: author.avatar.asset.url, type: "image/jpeg" }]
        : "/favicon.ico",
    },
    openGraph: {
      title: author.name ?? "",
      description: portableTextToPlainText(author.description!),
      url: url,
      siteName: author.name ?? "",
      locale: "en_US",
      type: "website",
      images: author.avatar?.asset?.url ? [author.avatar.asset.url] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: author.name ?? "",
      card: "summary_large_image",
      images: author.avatar?.asset?.url ? [author.avatar.asset.url] : [],
    },
    verification: {
      google: "",
      yandex: "",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
