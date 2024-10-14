import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import UserButton from "@/app/(platform)/(dashboard)/_components/user-button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-x-4">
          <Logo />
          <Button size="sm" variant="primary">
            Create
          </Button>
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
