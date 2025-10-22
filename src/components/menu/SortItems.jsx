import { useMenuContext } from "../../hooks/useMenuContext";
import { menuActionTypes } from "../../providers/ActionTypes";

export default function SortItems() {
  const { state, dispatch } = useMenuContext();

  return (
    <select
      value={state.sortOrder}
      onChange={(e) =>
        dispatch({
          type: menuActionTypes.SET_SORT,
          payload: e.target.value,
        })
      }
      className="select border rounded px-3 py-1"
    >
      <option value="">Sort By</option>
      <option value="name-asc">Name (A – Z)</option>
      <option value="name-desc">Name (Z – A)</option>
      <option value="price-asc">Price (Low – High)</option>
      <option value="price-desc">Price (High – Low)</option>
    </select>
  );
}
