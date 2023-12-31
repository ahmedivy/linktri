"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { IoReloadOutline } from "react-icons/io5";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import registerUser from "@/actions/register";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function RegisterModal() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [f, setF] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setF((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    if (f.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    const res = await registerUser(f);
    if (res.error) {
      setError(res.error);
    } else {
      setError("");
      router.push(`/${res.user.username}`);
    }
    setLoading(false);
  };

  const handleSocial = async (e) => {
    setError("Sorry, social login is not accessible at the moment 😓");

    setTimeout(() => {
      setError("");
    }, 4000);
  };

  return (
    <DialogContent className="sm:max-w-[425px] mb-4">
      <DialogHeader className="my-6">
        <DialogTitle className="text-center text-2xl font-bold">
          Create New Profile
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={f.name}
            onChange={onChange}
          />
          <Input
            required
            id="username"
            name="username"
            type="text"
            placeholder="@username"
            value={f.username}
            onChange={onChange}
          />
          <Input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={f.email}
            onChange={onChange}
          />
          <Input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={f.password}
            onChange={onChange}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button type="submit" className="font-semibold" disabled={loading}>
            {loading && <IoReloadOutline className="animate-spin mr-2" />}
            {loading ? "Creating Profile" : "Create Profile"}
          </Button>

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

          <Button variant="outline" type="button" onClick={handleSocial}>
            <FcGoogle className="mr-2 h-6 w-6" /> Google
          </Button>
          <Button variant="outline" type="button" onClick={handleSocial}>
            <AiFillGithub className="mr-2 h-6 w-6" /> Github
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}

export default RegisterModal;
