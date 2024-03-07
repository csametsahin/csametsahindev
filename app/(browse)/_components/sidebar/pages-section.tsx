import PageItem from "@/components/page-item";
import { pages } from "@/lib/constants";

const PagesSection = () => {
  return (
    <div className="flex flex-col space-y-2">
      {pages.map((item) => (
        <PageItem page={item} key={item.href} />
      ))}
    </div>
  );
};

export default PagesSection;
