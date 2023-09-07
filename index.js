import { createCharacterCard } from "./components/card/card.js";
import {
  createButton,
  handleNextButton,
  handlePreviousButton,
} from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { searchBarContainer } from "./components/search-bar/search-bar.js";
import {
  createSearchBar,
  handleSearchBar,
} from "./components/search-bar/search-bar.js";

let maxPage = 1;
let page = 1;
let searchQuery = "";

const cardContainer = document.querySelector('[data-js="card-container"]');
const navigation = document.querySelector('[data-js="navigation"]');
const searchBar = createSearchBar();
searchBarContainer.append(searchBar);
searchBar.addEventListener("submit", handleSearchBar);

const previousButton = createButton("prev", () =>
  handlePreviousButton(page, searchQuery)
);
navigation.append(previousButton);
previousButton.classList.add("button");

const span = createPagination(page, maxPage);
navigation.append(span);
span.classList.add("navigation__pagination");

const nextButton = createButton(
  "next",
  handleNextButton,
  page,
  maxPage,
  searchQuery
);

navigation.append(nextButton);
nextButton.classList.add("button");

//whole fetchCharacters function with callbacks
export async function fetchCharacters(page, maxPage, searchQuery = "") {
  try {
    console.log(page);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();
    console.log(data);
    maxPage = await data.info.pages;
    span.textContent = `${page} / ${maxPage}`;
    nextButton.onclick = () => handleNextButton(page, maxPage, searchQuery);
    previousButton.onclick = () =>
      handlePreviousButton(page, maxPage, searchQuery);
    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
  } catch (error) {
    alert("aw jeez Rick. I don't know this buddy!");
    console.error("aw jeez Rick. I don't know.", error);
  }
}

await fetchCharacters(page, maxPage, (searchQuery = ""));
console.log(maxPage);

//css extra stuff
const aside = document.querySelector(".aside");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const triggerPoint = 500;
  if (scrollY > triggerPoint) {
    aside.style.top = `${scrollY - triggerPoint}px`;
  } else {
    aside.style.top = "100";
  }
});
