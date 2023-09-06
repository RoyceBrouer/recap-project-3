const cardcontainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard(character) {
  const characterCard = document.createElement(li); //document?
  characterCard.classList.add("card");
  characterCard.innerHTML = `div class="card__image-container">
  <img
    class="card__image"
    src="${character.results[0].image}"
    alt=""
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${character.results[0].name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${character.results[0].status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${character.results[0].type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${character.results[0].episode.length}</dd>
  </dl>
</div>`;
  return characterCard;
}
