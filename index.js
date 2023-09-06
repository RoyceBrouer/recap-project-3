<<<<<<< HEAD
import { createCharacterCard } from "./components/card/card.js";
=======
import {createCharacterCard} from "./components/card/card.js"
// States
>>>>>>> c5ac9666850336de2764ad9b0cb251f900809707

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
  );
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

<<<<<<< HEAD
// States
const maxPage = 1;
const page = 1;
export const searchQuery = "";
=======
let maxPage = 1;
let page = 1;
const searchQuery = "";
>>>>>>> c5ac9666850336de2764ad9b0cb251f900809707

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

export async function fetchCharacters(page) {
  try {
<<<<<<< HEAD
    const response = await fetch("https://rickandmortyapi.com/");
    if (response.ok) {
      const data = await response.json();
      cardContainer.innerHTML = "";
      data.slice(0, 20).forEach((character) => {
=======
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`);
      const data = await response.json();

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
if (searchQuery){
  page=1;
}
      cardContainer.innerHTML = '';
      data.results.forEach((character) => {
>>>>>>> c5ac9666850336de2764ad9b0cb251f900809707
        const card = createCharacterCard(character);
        cardContainer.append(card);
        
      });
<<<<<<< HEAD
    } else {
      console.log("Oh jeez...");
=======
    
     }catch(error) {
     console.error("aw jeez Rick. I don't know.", error);
>>>>>>> c5ac9666850336de2764ad9b0cb251f900809707
    }
  } catch (error) {
    console.error("oh jeez Rick. I don't know.");
  }
}
<<<<<<< HEAD
fetchCharacters();

searchBar.addEventListener("submit", () => {
  searchQuery = event.target;
  console.log(searchQuery);
});
=======
fetchCharacters(page);
>>>>>>> c5ac9666850336de2764ad9b0cb251f900809707
