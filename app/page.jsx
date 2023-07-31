"use client";

import Footer from "@/components/footer";
import ThemeToggle from "@/components/theme-toggle";
import Headline from "@/components/headline";
import { useState, useEffect } from "react";

const words = ["Explore.", "Inspire.", "Connect."];
const gradients = [
  "from-green-400 to-blue-500",
  "from-pink-500 to-yellow-500",
  "from-purple-500 to-red-500",
];

export default function Home() {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-48 min-w-ful">
      <Headline words={words} gradients={gradients} currIndex={currIndex} />
    </main>
  );
}
