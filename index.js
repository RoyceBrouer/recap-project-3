import {
  createCharacterCard,
  cardContainer,
  fetchCharacters,
} from "./components/card/card.js";
import {
  createButton,
  handleNextButton,
  handlePreviousButton,
  // page,
  // maxPage,
  // searchQuery,
} from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { searchBarContainer } from "./components/search-bar/search-bar.js";
import { navigation } from "./components/nav-pagination/nav-pagination.js";
import {
  createSearchBar,
  handleSearchBar,
} from "./components/search-bar/search-bar.js";

export let maxPage = 1;
export let page = 1;
export let searchQuery = "";

const searchBar = createSearchBar(handleSearchBar);
searchBarContainer.append(searchBar);

const previousButton = createButton("prev", () =>
  handlePreviousButton(page, searchQuery)
);
navigation.append(previousButton);
previousButton.classList.add("button");

const span = createPagination(page, maxPage);
navigation.append(span);
span.classList.add("navigation__pagination");

const nextButton = createButton("next", () =>
  handleNextButton(page, maxPage, searchQuery)
);
navigation.append(nextButton);
nextButton.classList.add("button");

fetchCharacters(page, (searchQuery = ""), span);
