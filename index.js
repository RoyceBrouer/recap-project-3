import { createCharacterCard } from "./components/card/card.js";
import {createButton} from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

let maxPage = 1;
let page = 1;
let searchQuery = "";

const previousButton = createButton("prev", handlePreviousButton);
navigation.append(previousButton);
previousButton.classList.add("button");
previousButton.setAttribute('data-js',"button-prev");

const span = createPagination("1 / 1",  );
navigation.append(span);
span.classList.add("navigation__pagination");
span.setAttribute('data-js','pagination');
const pagination = document.querySelector('[data-js="pagination"]');

const nextButton = createButton("next", handleNextButton);
navigation.append(nextButton);
nextButton.classList.add("button");
nextButton.setAttribute('data-js',"button-next");

function handleNextButton() {
  if (page < maxPage) {
    page++;
    fetchCharacters(page, (searchQuery = ""));
    console.log("Wow Rick! i can see all the Characters.");
  } else {
    alert("Stop Morty! 'burb' You can't go there, it's the end of the Page");
  }
}

 function handlePreviousButton() {
  if (page > 1) {
    page--;
    fetchCharacters(page, (searchQuery = ""));
  } else {
    alert(
      "Aw Jeez Rick. You you you cant't go back any further. Let's go home Rick. I miss Jessica"
    );
  }
}

export async function fetchCharacters(page, searchQuery="") {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
  } catch (error) {
    console.error("aw jeez Rick. I don't know.", error);
  }
}

fetchCharacters(page, (searchQuery = ""));

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  fetchCharacters(page, searchQuery);
});

