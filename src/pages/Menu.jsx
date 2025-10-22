import menuImg from "../assets/menu_cover.png";
import MenuHero from "../components/menu/MenuHero";
import MenuList from "../components/menu/MenuList";
import Pagination from "../components/menu/Pagination";

export default function Menu() {
  return (
    <div className="py-8">
      <div className="text-center">
        <MenuHero menuImg={menuImg} />
        <MenuList />
        <Pagination />
      </div>
    </div>
  );
}
