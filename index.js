import {createCharacterCard} from "./components/card/card.js"

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
const searchQuery = "";

async function fetchCharacters() {
  const RickUrl = "https://rickandmortyapi.com/";
  try {
    const response = await fetch("https://rickandmortyapi.com/")
    if (response.ok){
      const data = await response.json();
      cardContainer.innerHTML = '';
      data.slice(0, 20).forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.appendChild(card);
      });
    } else {
      console.log("Oh jeez...");
    } 
     }catch(error) {
     console.error("oh jeez Rick. I don't know.");
    }
}
fetchCharacters();