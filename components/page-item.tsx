"use client";

import { Page } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface PageItemProps {
  page: Page;
}

const PageItem = ({ page }: PageItemProps) => {
  const pathname = usePathname();

  // Memorize
  const Icon = page.icon;

  return (
    <div className="w-full h-12 ">
      <Button
        asChild
        variant="ghost"
        className={cn(
          "flex justify-between items-center space-x-4",
          pathname === page.href && "bg-accent"
        )}
      >
        <Link href={page.href}>
          <p>{page.name}</p>
          {Icon && <Icon />}
        </Link>
      </Button>
    </div>
  );
};

export default PageItem;
