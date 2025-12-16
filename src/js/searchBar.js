export function initSearchBar() {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");

  if (!form || !input) {
    console.warn("SearchBar: form or input not found");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const term = input.value.trim();
    if (!term) return;

    window.location.href = `/busca/index.html?q=${encodeURIComponent(term)}`;
  });
}
