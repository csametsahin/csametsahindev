import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import csametsahin from "@/public/csametsahin.jpg";

const UserAvatar = () => {
  const path = csametsahin.src;
  return (
    <div className="flex flex-row space-x-4 p-4">
      <div>
        <Avatar>
          <AvatarImage src={path} alt="@csş" />
          <AvatarFallback>CSŞ</AvatarFallback>
        </Avatar>
      </div>
      <div className="">
        <p className="text-xl">Samet Şahin</p>
        <p className="text-muted-foreground">Software Engineer</p>
      </div>
    </div>
  );
};

export default UserAvatar;
