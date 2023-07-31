"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function RegisterModal() {
  const [f, setF] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {};

  const onChange = (e) => {
    setF((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <DialogContent className="sm:max-w-[425px] mb-4">
      <DialogHeader className="my-6">
        <DialogTitle className="text-center text-2xl">
          Create Profile
        </DialogTitle>
        {/* <DialogDescription className="text-center">Create a profile to get started</DialogDescription> */}
      </DialogHeader>
      <form>
        <div className="flex flex-col gap-4">
          {/* <Label htmlFor="name">Name</Label> */}
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={f.name}
            onChange={onChange}
          />
          {/* <Label htmlFor="username">Username</Label> */}
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="@username"
            value={f.username}
            onChange={onChange}
          />
          {/* <Label htmlFor="email">Email</Label> */}
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={f.email}
            onChange={onChange}
          />
          {/* <Label htmlFor="password">Password</Label> */}
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={f.password}
            onChange={onChange}
          />
          <Button type="submit" className="font-semibold">Create Profile</Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" type="button" onClick={() => {}}>
            <FcGoogle className="mr-2 h-6 w-6" /> Google
          </Button>
          <Button variant="outline" type="button" onClick={() => {}}>
            <AiFillGithub className="mr-2 h-6 w-6" /> Github
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}

export default RegisterModal;
