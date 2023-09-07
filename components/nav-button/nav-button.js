import { fetchCharacters } from "../../index.js";

export function createButton(text /*, onClick, page, maxPage, searchQuery*/) {
  const button = document.createElement("button");
  button.textContent = text;
  // button.addEventListener("click", () => onClick(page, maxPage, searchQuery));
  return button;
}

export function handleNextButton(page, maxPage) {
  if (page < maxPage) {
    page++;
    console.log("inside nav button", page);
    fetchCharacters(page);
    console.log("Wow Rick! i can see all the Characters.");
  } else {
    alert("Stop Morty! 'burb' You can't go there, it's the end of the Page");
  }
}

export function handlePreviousButton(page) {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  } else {
    alert(
      "Aw Jeez Rick. You you you cant't go back any further. Let's go home Rick. I miss Jessica"
    );
  }
}
