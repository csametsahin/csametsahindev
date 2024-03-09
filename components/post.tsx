import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import nextsvg from "@/public/next.svg";

type CardProps = React.ComponentProps<typeof Card>;

const Post = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("w-250", className)} {...props}>
      <CardHeader>
        <CardTitle>Post Title</CardTitle>
        <CardDescription>post description.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center lg:space-x-4 rounded-md border p-4 overflow-hidden">
          <div className="space-y-1 hidden lg:flex w-40 h-40">
            <Image src={nextsvg} alt="image" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm lg:font-medium leading-none font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              aliquam, deserunt labore magni sunt molestiae. Enim odio magnam
              modi illo.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Read</Button>
      </CardFooter>
    </Card>
  );
};

export default Post;
