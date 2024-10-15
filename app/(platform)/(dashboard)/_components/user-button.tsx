"use client";

import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "../../../../components/ui/button";
import { Conditional } from "../../../../components/ui/conditional";
import { signOutStub } from "@/lib/auth-stub";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/use-user";

const UserButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useUser();
  const router = useRouter();

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isSignedOut = signOutStub();

    if (isSignedOut) {
      router.push("/");
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="rounded-full bg-amber-500 w-10 h-10  shadow-sm flex items-center justify-center"
        onClick={() => handleToggleMenu()}
      >
        <div className="text-lg text-white">{user?.charAt(0)}</div>
      </div>

      <Conditional condition={isMenuOpen}>
        <div className="z-20 absolute top-14 right-0 bg-transparent shadow-lg">
          <Button onClick={(e) => handleSignOut(e)} size="sm">
            <LogoutIcon className="mr-2 text-white" />{" "}
            <div className="text-sm text-white">Logout</div>
          </Button>
        </div>
      </Conditional>

      <Conditional condition={isMenuOpen}>
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      </Conditional>
    </div>
  );
};

export default UserButton;
