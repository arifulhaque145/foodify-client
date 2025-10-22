import { useMenuContext } from "../../hooks/useMenuContext";
import { menuActionTypes } from "../../providers/ActionTypes";

export default function Pagination() {
  const { state, dispatch } = useMenuContext();

  const totalPages = Math.ceil(state.allItems.length / state.itemsPerPage);
  const currentPage = state.currentPage;

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch({
        type: menuActionTypes.SET_PAGE,
        payload: currentPage - 1,
      });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch({
        type: menuActionTypes.SET_PAGE,
        payload: currentPage + 1,
      });
    }
  };

  const handlePageClick = (page) => {
    dispatch({
      type: menuActionTypes.SET_PAGE,
      payload: page,
    });
  };

  if (state.itemsPerPage === Infinity) return null;

  return (
    <div className="flex gap-2 mt-4 justify-center">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageClick(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
