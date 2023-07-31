import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import AuthProvider from "@/components/auth-provider";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/footer";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linktri",
  description: "Get more out of your Instagram bio link",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={font.className}>
        <div className="flex flex-col items-center container min-h-screen justify-between">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <AuthProvider>{children}</AuthProvider>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
