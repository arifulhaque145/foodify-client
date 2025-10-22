import { useEffect } from "react";
import useMenu from "../../hooks/useMenu";
import { useMenuContext } from "../../hooks/useMenuContext";
import { menuActionTypes } from "../../providers/ActionTypes";
import MenuItem from "./MenuItem";

export default function MenuList() {
  const { state, dispatch } = useMenuContext();
  const { data: menu = [], isLoading, error } = useMenu();
  let content, startIndex, endIndex, paginatedItems;

  useEffect(() => {
    if (menu.length > 0) {
      dispatch({ type: menuActionTypes.SET_ITEMS, payload: menu });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  const filteredItems = (menu || [])
    .filter((item) =>
      item.name.toLowerCase().includes(state.search.toLowerCase())
    )
    .filter(
      (item) => state.category === "" || item.category === state.category
    );

  if (state.itemsPerPage === Infinity) {
    paginatedItems = filteredItems;
  } else {
    startIndex = (state.currentPage - 1) * state.itemsPerPage;
    endIndex = startIndex + state.itemsPerPage;
    paginatedItems = filteredItems.slice(startIndex, endIndex);
  }

  if (state.sortOrder === "name-asc") {
    paginatedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortOrder === "name-desc") {
    paginatedItems.sort((a, b) => b.name.localeCompare(a.name));
  } else if (state.sortOrder === "price-asc") {
    paginatedItems.sort((a, b) => a.price - b.price);
  } else if (state.sortOrder === "price-desc") {
    paginatedItems.sort((a, b) => b.price - a.price);
  }

  if (isLoading) {
    content = <p className="text-center text-2xl mt-8">Loading...</p>;
  }

  if (!isLoading && error) {
    content = (
      <p className="text-center text-2xl mt-8">Something Went Wrong...</p>
    );
  }

  if (!isLoading && !error && paginatedItems.length === 0) {
    content = <p className="text-center text-2xl mt-8">No Menu Found</p>;
  }

  if (!isLoading && !error && paginatedItems.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:px-8 mt-8">
        {paginatedItems?.map((item) => (
          <MenuItem key={item._id} dish={item} />
        ))}
      </div>
    );
  }

  return <div className="px-4">{content}</div>;
}
