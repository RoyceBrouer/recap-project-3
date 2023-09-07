// import { page, maxPage, searchQuery } from "../nav-button/nav-button.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const pagination = document.querySelector('[data-js="pagination"]');

export function createCharacterCard(character) {
  const characterCard = document.createElement("li"); //document?

  characterCard.classList.add("card");
  characterCard.innerHTML = `<div class="card__image-container">
  <img
    class="card__image"
    
    src=${character.image}

    alt=""
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${character.name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${character.status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${character.type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${character.episode.length}</dd>
  </dl>
</div>`;
  return characterCard;
}

export async function fetchCharacters(page, searchQuery = "", span) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();

    let maxPage = data.info.pages;
    span.textContent = `${page} / ${maxPage}`;
    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
  } catch (error) {
    console.error("aw jeez Rick. I don't know.", error);
  }
}
