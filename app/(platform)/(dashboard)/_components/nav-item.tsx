import { AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: string;
  onExpand: (org: string) => void;
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  return (
    <AccordionItem value={organization} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative bg-fuchsia-600 rounded-sm"></div>
          <span className="font-medium text-sm">{organization}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  );
};
