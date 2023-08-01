"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { IoReloadOutline } from "react-icons/io5";
import { signIn } from "next-auth/react";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoginModal() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [f, setF] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setF((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const callbackUrl = "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const result = await signIn("credentials", {
        email: f.email,
        password: f.password,
        redirect: false,
        callbackUrl,
      });

      setLoading(false);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push(callback);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };

  const handleSocial = async () => {
    setError("Sorry, social login is not accessible at the moment 😓");

    setTimeout(() => {
      setError("");
    }, 4000);
  };

  return (
    <div className="sm:max-w-[425px] mb-4">
      <div className="my-6">
        <div className="text-center text-2xl font-bold">
          Login to your Profile
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
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
            {loading ? "Loading..." : "Login"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or login with
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
    </div>
  );
}

export default LoginModal;
