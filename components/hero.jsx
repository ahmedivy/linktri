"use client";

import { Button } from "./ui/button";
import Headline from "@/components/headline";
import { useState, useEffect } from "react";

const words = ["Share.", "Inspire.", "Connect."];
const gradients = [
  "from-green-400 to-blue-500",
  "from-pink-500 to-yellow-500",
  "from-purple-500 to-red-500",
];

export default function Hero() {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <Headline
        words={words}
        gradients={gradients}
        currIndex={currIndex}
      />
      <div className="px-12">
        <p className="text-muted-foreground text-center text-2xl">
          Elevate your online presence by sharing all profiles on one go!
        </p>
      </div>
      <div className="flex gap-4 m-auto">
        <Button className="font-semibold">Login</Button>
        <Button
          className={`px-3 text-background bg-gradient-to-r ${gradients[currIndex]} rounded-md shadow-md transition-colors duration-500 ease-in-out`}
        >
          Create Profile
        </Button>
      </div>
    </div>
  );
}
