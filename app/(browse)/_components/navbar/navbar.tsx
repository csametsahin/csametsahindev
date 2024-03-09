import { PanelBottomOpen } from "lucide-react";
import UserAvatar from "./user-avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import PagesSection from "../sidebar/pages-section";
import SocialsSection from "../sidebar/socials-section";

const Navbar = () => {
  return (
    <nav className=" lg:mt-10 lg:mx-40 bg-gradient-to-b overflow-hidden justify-between rounded-md  border p-5  lg:flex ">
      <div className=" flex-col space-y-4 hidden lg:flex">
        <div>
          <UserAvatar />
        </div>
      </div>
      <div className="hidden lg:flex">
        <h2 className="text-xl">csametdevcom</h2>
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost">
              <PanelBottomOpen />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <UserAvatar />
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex-1 text-center">
                    <PagesSection />
                  </div>
                </div>
                <div className="mt-3 h-[120px]"></div>
              </div>
              <DrawerFooter>
                <SocialsSection />
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
