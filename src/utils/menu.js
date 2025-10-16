// menuUtils.js
export function processMenu(items, { search = "", sortBy = "", isAsc = true }) {
  let result = [...items];

  // 🔍 Search
  if (search) {
    result = result.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // ↕️ Sort
  if (sortBy === "name") {
    result.sort((a, b) =>
      isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }
  
  if (sortBy === "price") {
    result.sort((a, b) => (isAsc ? a.price - b.price : b.price - a.price));
  }

  return result;
}
