import { fetchCharacters } from "../../index.js";
import { handlePreviousButton } from "../nav-button/nav-button.js";

export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

export function createSearchBar() {
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

  return searchBar;
}

export function handleSearchBar(e) {
  e.preventDefault();
  let searchQuery = e.target.elements.query.value;
  console.log(searchQuery);
  fetchCharacters("1", "", searchQuery);
  nextButton.onclick = () => handleNextButton(1, "", searchQuery);
  previousButton.onclick = () => handlePreviousButton(page, searchQuery);
  // nextButton.onclick = handleNextButton;
  // previousButton.onclick = handlePreviousButton;
  return searchQuery;
}
