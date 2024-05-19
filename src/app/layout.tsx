import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme";


export const metadata: Metadata = {
  title: "FitFusion - Fitness Tracker",
  description: "track your fitness progress with FitFusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body 
      className={cn(" flex flex-col w-full min-h-screen relative justify-start items-center gap-3  overflow-x-hidden")}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
