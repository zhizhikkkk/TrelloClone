"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signInStub } from "@/lib/auth-stub";
import { useRouter } from "next/navigation";

const headingFont = localFont({
  src: "../../../../../public/fonts/font.woff2",
});

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isSignedIn = signInStub(email, password);

    if (isSignedIn) {
      router.push("/create-org");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-80 pb-10">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className
        )}
      >
        <div className="text-3xl text-center text-neutral-800 mb-6">
          Sign in
        </div>
      </div>
      <form className="w-full max-w-sm mx-auto">
        <div className="mb-4">
          <div className="block text-gray-700 text-sm font-bold mb-1">
            Email
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-8">
          <div className="block text-gray-700 text-sm font-bold mb-1">
            Password
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="********"
          />
        </div>
        <Button size="lg" className="w-full" onClick={(e) => handleSignIn(e)}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Page;
