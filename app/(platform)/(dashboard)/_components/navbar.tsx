import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import UserButton from "@/app/(platform)/(dashboard)/_components/user-button";
import Add from "@mui/icons-material/Add";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-x-4">
          <Logo />
          <Button
            size="sm"
            variant="primary"
            className="rounded-sm hidden md:block h-auto  py-1.5 px-2"
          >
            Create
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="rounded-sm block md:hidden"
          >
            <Add className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
