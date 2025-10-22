export function processMenu(
  items,
  { search = "", filterBy = "", sortBy = "", isAsc = true }
) {
  let result = [...items];

  // 🔍 Search
  if (search) {
    result = result.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 🔍 Filter
  if (filterBy === "low") {
    result = result.filter((item) => item.price <= 10);
  } else if (filterBy === "high") {
    result = result.filter((item) => item.price > 10 && item.price <= 20);
  }

  // ↕️ Sort
  if (sortBy === "name") {
    result.sort((a, b) =>
      isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  } else if (sortBy === "price") {
    result.sort((a, b) => (isAsc ? a.price - b.price : b.price - a.price));
  }

  return result;
}
