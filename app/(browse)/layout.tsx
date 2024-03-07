import Navbar from "./_components/navbar/navbar";
import SideBar from "./_components/sidebar/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full mt-5">
        <SideBar />
        <div className="w-full border-l">{children}</div>
      </div>
    </>
  );
};

export default Layout;
