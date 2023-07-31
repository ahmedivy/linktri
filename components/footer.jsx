import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex max-h-20 justify-between items-center mb-4 min-w-full">
      <div className="">
        <p className="text-sm text-muted-foreground">
          Made by{" "}
          <Link href="https://github.com/ahmedivy" className="hover:text-foreground underline-offset-1 underline">
            Ahmed
          </Link>{" "}
          using{" "}
          <Link href="https://nextjs.org" className="hover:text-foreground underline-offset-1 underline">
            Next.js
          </Link>
        </p>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </footer>
  );
}

export default Footer;
