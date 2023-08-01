"use server";

// Experimental NextJS Serverless Functions

import { hash } from "bcryptjs";
import { prisma } from "@/lib/db";

async function registerUser({ username, name, email, password }) {
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (emailExists) {
    return {
      error: "Email already exists",
    };
  }

  const usernameExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (usernameExists) {
    return {
      error: "Username already exists",
    };
  }

  const hashedPass = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      username,
      password: hashedPass,
    },
  });

  return {
    message: "User created successfully",
    user,
  };
}

export default registerUser;
