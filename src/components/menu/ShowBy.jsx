import { useMenuContext } from "../../hooks/useMenuContext";
import { menuActionTypes } from "../../providers/ActionTypes";

export default function ShowBy() {
  const { state, dispatch } = useMenuContext();

  return (
    <select
      value={state.itemsPerPage}
      onChange={(e) =>
        dispatch({
          type: menuActionTypes.SET_PAGE_ITEMS,
          payload: Number(e.target.value),
        })
      }
      className="select border rounded px-3 py-1"
    >
      <option value={Infinity}>Show By</option>
      <option value={10}>10 items</option>
      <option value={15}>15 items</option>
      <option value={25}>25 items</option>
    </select>
  );
}
