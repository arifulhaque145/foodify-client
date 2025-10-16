import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="bg-red-50 border-2 border-red-300 rounded w-md">
      <div className="px-4 flex">
        <input
          type="text"
          placeholder="Search products..."
          className="border-none focus:outline-none w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="btn p-0 bg-transparent border-none text-2xl">
          <IoIosSearch className="text-gray-400" />
        </p>
      </div>
    </div>
  );
}
