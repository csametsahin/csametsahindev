import { Page } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

interface PageItemProps {
  page: Page;
}

const PageItem = ({ page }: PageItemProps) => {
  const Icon = page.icon;
  return (
    <div className="w-full h-12 ">
      <Button
        asChild
        variant="ghost"
        className="flex justify-between items-center space-x-4"
      >
        <Link href={page.href}>
          <p>{page.name}</p>
          <Icon />
        </Link>
      </Button>
    </div>
  );
};

export default PageItem;
