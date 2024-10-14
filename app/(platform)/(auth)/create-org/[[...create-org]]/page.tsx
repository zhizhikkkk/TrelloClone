"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createOrgStub } from "@/lib/org-stub";
import { useRouter } from "next/navigation";

const headingFont = localFont({
  src: "../../../../../public/fonts/font.woff2",
});

const Page = () => {
  const [orgTitle, setOrgTitle] = useState("");
  const router = useRouter();

  const handleCreateOrg = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isOrgCreated = createOrgStub(orgTitle);

    if (isOrgCreated) {
      router.push("/");

      // Возможно костыль. 
      // Без него роутинг не проходит через middleware
      router.refresh();
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
          Create organization
        </div>
      </div>
      <form className="w-full max-w-sm mx-auto">
        <div className="mb-8">
          <div className="block text-gray-700 text-sm font-bold mb-1">
            Title
          </div>
          <input
            onChange={(e) => setOrgTitle(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Wonderful Corp"
          />
        </div>
        <Button
          size="lg"
          className="w-full"
          onClick={(e) => handleCreateOrg(e)}
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default Page;
