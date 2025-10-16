import { useEffect, useState } from "react";
import { RiEqualizerFill } from "react-icons/ri";
import MenuItem from "../components/menu/MenuItem";
import SearchBar from "../components/menu/SearchBar";
import Loader from "../components/shared/Loader";
import TitleParagraph from "../components/shared/TitleParagraph";
import useMenu from "../hooks/useMenu";
import { processMenu } from "../utils/menu";

export default function Menu() {
  const { menuItems } = useMenu();
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [isAsc, setIsAsc] = useState(true);

  useEffect(() => {
    if (menuItems?.data) {
      const processed = processMenu(menuItems.data, {
        search,
        sortBy,
        filterBy,
        isAsc,
      });
      setMenu(processed);
    }
  }, [menuItems, search, sortBy, filterBy, isAsc]);

  if (menuItems?.isLoading) return <Loader />;

  let menuContent;
  if (menu?.length === 0) {
    menuContent = <p className="text-center text-2xl">No Menu Found</p>;
  } else {
    menuContent = menu?.map((item) => <MenuItem key={item._id} dish={item} />);
  }

  return (
    <div className="px-4 py-8">
      <div className="text-center">
        <TitleParagraph
          title="All Food Items Are Here"
          paragraph="Find your delicious food item in here"
          titleStyle="text-4xl font-extrabold text-center"
          paraStyle="text-center font-light text-gray-500 py-4"
        />
        {/* Search */}
        <div className="w-full">
          <div className="my-4 flex gap-2 justify-center">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
        </div>
      </div>

      <div
        className="flex items-center gap-2 text-xl text-gray-600 mb-4"
        onClick={() => {
          setSortBy("name");
          setIsAsc(!isAsc);
        }}
      >
        <RiEqualizerFill />
        <p className="font-bold">Filter & Refine</p>
      </div>

      {/* Item List */}
      <div className="flex gap-1">
        <div className="w-1/3">
          <p>Name</p>
          <p>Name</p>
          <p>Name</p>
          <p>Name</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {menuContent}
        </div>
      </div>
    </div>
  );
}
