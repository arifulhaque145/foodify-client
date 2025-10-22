import { useMenuContext } from "../../hooks/useMenuContext";
import { menuActionTypes } from "../../providers/ActionTypes";

export default function FilterItems() {
  const { state, dispatch } = useMenuContext();
  const categories = [
    ...new Set(state?.allItems?.map((item) => item.category)),
  ];

  return (
    <select
      value={state.category}
      onChange={(e) =>
        dispatch({
          type: menuActionTypes.SET_CATEGORY,
          payload: e.target.value,
        })
      }
      className="select border rounded px-3 py-1 capitalize"
    >
      <option value="">Filter By</option>
      {categories.map((cata, i) => (
        <option className="capitalize" key={i} value={cata}>
          {cata}
        </option>
      ))}
    </select>
  );
}
