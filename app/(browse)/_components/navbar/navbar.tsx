import UserAvatar from "./user-avatar";

const Navbar = () => {
  return (
    <nav className=" mt-20 mx-40 bg-gradient-to-b overflow-hidden justify-between rounded-md border p-5 hidden lg:flex ">
      <div className="flex flex-col space-y-4">
        <div>
          <UserAvatar />
        </div>
      </div>
      <div>
        <h2 className="text-xl">csametdevcom</h2>
      </div>
    </nav>
  );
};

export default Navbar;
