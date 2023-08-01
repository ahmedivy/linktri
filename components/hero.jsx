"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Headline from "@/components/headline";
import { useSession } from "next-auth/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RegisterModal from "./register-modal";
import LoginModal from "./login-modal";

const words = ["Share.", "Inspire.", "Connect."];
const gradients = [
  "from-green-400 to-blue-500",
  "from-pink-500 to-yellow-500",
  "from-purple-500 to-red-500",
];

export default function Hero() {
  const [currIndex, setCurrIndex] = useState(0);
  const { data: session, status } = useSession();

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
        {status == "authenticated" ? (
          <>
            <Button className="font-semibold text-md" size="lg">
              Logout
            </Button>
            <Button
              className={`text-background bg-gradient-to-r ${gradients[currIndex]} transition-all duration-500 ease-in-out font-semibold text-md hover:opacity-70`}
              size="lg"
            >
              My Profile
            </Button>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button className="font-semibold text-md" size="lg">
                Login
              </Button>
            </Link>

            {/* <Dialog>
              <DialogTrigger asChild>
                <Button className="font-semibold text-md" size="lg">
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <LoginModal />
              </DialogContent>
            </Dialog> */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className={`text-background bg-gradient-to-r ${gradients[currIndex]} transition-all duration-500 ease-in-out font-semibold text-md hover:opacity-70`}
                  size="lg"
                >
                  Create Profile
                </Button>
              </DialogTrigger>
              <RegisterModal />
            </Dialog>
          </>
        )}
      </div>
    </div>
  );
}
