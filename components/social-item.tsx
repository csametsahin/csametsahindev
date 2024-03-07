import { Social } from "@/lib/types";
import { Button } from "./ui/button";

interface SocialItemProps {
  social: Social;
}

const SocialItem = ({ social }: SocialItemProps) => {
  const Icon = social.icon;
  return (
    <div className="w-full h-12 ">
      <Button
        asChild
        variant="ghost"
        className="flex justify-between items-center space-x-4"
      >
        <a href={social.href}>
          <Icon className="w-5 h-5" />
        </a>
      </Button>
    </div>
  );
};

export default SocialItem;
