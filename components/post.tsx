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

import { redirect } from "next/navigation";

export type PostProps = {
  title: string;
  slug: string;
  author: string;
  date: string;
  coverImage: string;
};

type CardProps = React.ComponentProps<typeof Card> & PostProps;

const Post = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("w-200", className)} {...props}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>post description.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center lg:space-x-4 rounded-md border p-4 overflow-hidden">
          <div className="space-y-1 hidden lg:flex w-40 h-40">
            <Image src={props.coverImage} alt="image" />
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
        <Button
          className="ml-auto"
          onClick={() => redirect(`/posts/${props.slug}`)}
        >
          Read
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Post;
