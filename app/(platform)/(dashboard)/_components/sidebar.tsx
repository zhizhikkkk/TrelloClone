"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useOrganization from "@/hooks/use-organization";
import useOrganizationList from "@/hooks/use-organization-list";
import Add from "@mui/icons-material/Add";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { NavItem } from "./nav-item";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  );
  const organization = useOrganization();
  const organizationList = useOrganizationList();

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/create-org">
            <Add className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {organizationList.map((org) => (
          <NavItem
            key={org}
            isActive={org === organization}
            isExpanded={expanded[org]}
            organization={org}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};
