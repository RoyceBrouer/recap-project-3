import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
export const searchQuery = "";

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
    console.log("Wow Rick! i can see all the Characters.");
  } else {
    alert("Stop Morty! 'burb' You can't go there, it's the end of the Page");
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  } else {
    alert(
      "Aw Jeez Rick. You you you cant't go back any further. Let's go home Rick. I miss Jessica"
    );
  }
});

export async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/");
    if (response.ok) {
      const data = await response.json();
      cardContainer.innerHTML = "";
      data.slice(0, 20).forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.append(card);
      });
    } else {
      console.log("Oh jeez...");
    }
  } catch (error) {
    console.error("oh jeez Rick. I don't know.");
  }
}
fetchCharacters();

searchBar.addEventListener("submit", () => {
  searchQuery = event.target;
  console.log(searchQuery);
});
