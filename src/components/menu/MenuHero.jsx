import TitleParagraph from "../shared/TitleParagraph";
import FilterItems from "./FilterItems";
import SearchBar from "./SearchBar";
import ShowBy from "./ShowBy";
import SortItems from "./SortItems";

export default function MenuHero({ menuImg }) {
  return (
    <div
      className="relative h-[50vh] flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${menuImg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-white text-center">
        <TitleParagraph
          title="All Food Items Are Here"
          paragraph="Find your delicious food item in here"
          titleStyle="text-4xl font-extrabold"
          paraStyle="font-light py-4"
        />

        {/* Search + Filters + Sort + ShowBy */}
        <div className="w-full">
          <div className="mt-12 flex gap-2 justify-center items-center mx-8 bg-amber-600 p-2 text-base-content rounded">
            <SearchBar />
            <FilterItems />
            <SortItems />
            <ShowBy />
          </div>
        </div>
      </div>
    </div>
  );
}
