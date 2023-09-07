export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

export function createSearchBar(onSubmit) {
  const searchBar = document.createElement("form");
  searchBar.innerHTML = `<input
    name="query"
    class="search-bar__input"
    type="text"
    placeholder="search characters"
    aria-label="character name"
  />
  <button class="search-bar__button" aria-label="search for character">
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
  </button>`;
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("action", "");

  searchBar.addEventListener("submit", onSubmit);

  return searchBar;
}

export function handleSearchBar(e) {
  e.preventDefault();
  searchQuery = e.target.elements.query.value;
  console.log(searchQuery);
  fetchCharacters(page, searchQuery);
}
