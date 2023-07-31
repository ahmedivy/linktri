"use client";

import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Headline from "@/components/headline";
import { useSession } from "next-auth/react";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import LoginModal from "./register-modal";

const words = ["Share.", "Inspire.", "Connect."];
const gradients = [
  "from-green-400 to-blue-500",
  "from-pink-500 to-yellow-500",
  "from-purple-500 to-red-500",
];

export default function Hero() {
  const [currIndex, setCurrIndex] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <Headline words={words} gradients={gradients} currIndex={currIndex} />
      <div className="px-12">
        <p className="text-muted-foreground text-center text-2xl">
          Elevate your online presence by sharing all profiles on one go!
        </p>
      </div>
      <div className="flex gap-4 m-auto">
        <Button className="font-semibold text-md" size="lg">
          {session ? "Logout" : "Login"}
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className={`text-background bg-gradient-to-r ${gradients[currIndex]} transition-all duration-500 ease-in-out font-semibold text-md hover:opacity-70`}
              size="lg"
            >
              {session ? "My Profile" : "Create Profile"}
            </Button>
          </DialogTrigger>
          <LoginModal />
        </Dialog>
      </div>
    </div>
  );
}
