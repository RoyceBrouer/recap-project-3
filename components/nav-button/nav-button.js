import { fetchCharacters } from "../card/card.js";

export function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

export function handleNextButton(page, maxPage, searchQuery) {
  if (page < maxPage) {
    page++;
    fetchCharacters(page, (searchQuery = ""));
    console.log("Wow Rick! i can see all the Characters.");
  } else {
    alert("Stop Morty! 'burb' You can't go there, it's the end of the Page");
  }
}

export function handlePreviousButton(page, searchQuery) {
  if (page > 1) {
    page--;
    fetchCharacters(page, (searchQuery = ""));
  } else {
    alert(
      "Aw Jeez Rick. You you you cant't go back any further. Let's go home Rick. I miss Jessica"
    );
  }
}
