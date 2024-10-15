import { Logo } from "./Logo";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <div className="font-trello fixed bottom-0 p-4 w-screen border-t bg-slate-100">
      <div className="flex justify-between">
        <Logo />
        <div className="flex space-x-4">
          <Button>Privacy Policy</Button>
          <Button>Terms of Service</Button>
        </div>
      </div>
    </div>
  );
};
