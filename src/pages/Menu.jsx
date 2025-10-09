import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import MenuItem from "../components/menu/MenuItem";
import SearchBar from "../components/menu/SearchBar";
import Loader from "../components/shared/Loader";
import useMenu from "../hooks/useMenu";

export default function Menu() {
  const { menuItems } = useMenu();
  const [menu, setMenu] = useState(menuItems?.data);

  if (menuItems?.isLoading) return <Loader />;

  let menuContent;
  if (menu?.length === 0) {
    menuContent = <p className="text-center text-2xl">No Menu Found</p>;
  } else {
    menuContent = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {menu?.map((item) => (
          <MenuItem key={item._id} dish={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">All Food Items Are Here</h1>
        {/* <p className="text-sm text-gray-600 my-8">
          Discover a variety of delicious food items to satisfy your cravings.
          From juicy burgers to authentic pizzas, <br /> we have something for
          everyone.
        </p> */}
        <div className="my-12 flex gap-2 justify-center items-center">
          <SearchBar menu={menu} setMenu={setMenu} />
          <div className="btn btn-ghost">
            <IoFilter className="text-2xl text-gray-400" />
          </div>
        </div>
      </div>
      {menuContent}
    </div>
  );
}
