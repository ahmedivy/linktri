import "./globals.css";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";

import AuthProvider from "@/components/auth-provider";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/footer";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Linktri",
  description: "Get more out of your Instagram bio link",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          `flex flex-col items-center container min-h-screen justify-between`,
          font.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>{children}</AuthProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
