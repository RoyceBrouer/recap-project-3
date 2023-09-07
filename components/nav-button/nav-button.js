import { fetchCharacters } from "../../index.js";

export function createButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  return button;
}

export function handleNextButton(page, maxPage, searchQuery) {
  if (page < maxPage) {
    page++;
    console.log("inside nav button", page);
    fetchCharacters(page, maxPage, searchQuery);
    console.log("Wow Rick! i can see all the Characters.");
  } else {
    alert("Stop Morty! 'burb' You can't go there, it's the end of the Page");
  }
}

export function handlePreviousButton(page, maxPage, searchQuery) {
  if (page > 1) {
    page--;
    fetchCharacters(page, maxPage, searchQuery);
  } else {
    alert(
      "Aw Jeez Rick. You you you cant't go back any further. Let's go home Rick. I miss Jessica"
    );
  }
}
