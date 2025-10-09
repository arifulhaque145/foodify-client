import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { default as useMenu } from "../../hooks/useMenu";

export default function SearchBar({ menu, setMenu }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { menuItems } = useMenu();

  useEffect(() => {
    if (!searchTerm) {
      setMenu(menuItems?.data);
      return;
    }

    const existingData = menu?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setMenu(existingData);
  }, [searchTerm, menu]);

  return (
    <div className="bg-red-50 border-2 border-red-300 rounded w-md">
      <div className="px-4 flex">
        <input
          type="text"
          placeholder="Search products..."
          className="border-none focus:outline-none w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p className="btn p-0 bg-transparent border-none text-2xl">
          <IoIosSearch className="text-gray-400" />
        </p>
      </div>
    </div>
  );
}
