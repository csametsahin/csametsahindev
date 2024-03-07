import PagesSection from "./pages-section";
import SocialsSection from "./socials-section";

type Props = {};

const SideBar = async (props: Props) => {
  return (
    <div className="ml-40 pr-40  flex-col hidden lg:flex ">
      <PagesSection />
      <hr />
      <SocialsSection />
    </div>
  );
};

export default SideBar;
