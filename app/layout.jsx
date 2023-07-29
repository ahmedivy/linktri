import "./globals.css";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import AuthProvider from "@/components/auth-provider";
import ThemeProvider from "@/components/theme-provider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Linktri",
  description: "Get more out of your Instagram bio link",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(`min-h-screen`, font.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
