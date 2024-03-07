import SocialItem from "@/components/social-item";
import { socials } from "@/lib/constants";

const SocialsSection = () => {
  return (
    <div className="flex flex-col space-x-2 my-5 items-center justify-center text-center ">
      <h2 className="font-semibold">Socials</h2>
      <div className="flex flex-row">
        {socials.map((item) => (
          <SocialItem social={item} key={item.href} />
        ))}
      </div>
    </div>
  );
};

export default SocialsSection;
