export function createButton(name, onClick) {
  const button = document.createElement("button");
  button.textContent = name;
  button.onclick = () => onClick;
  return button;
}

// const previousButton = createButton(previous);
// previousButton.classList.add("button button--prev");
// previousButton.setAttribute(data - js, "button-prev");

// createButton(previous);

export function handleNextButton() {
  if (page < maxPage) {
    page++;
    fetchCharacters(page, (searchQuery = ""));
    console.log("Wow Rick! i can see all the Characters.");
  } else {
    alert("Stop Morty! 'burb' You can't go there, it's the end of the Page");
  }
}

export function handlePreviousButton() {
  if (page > 1) {
    page--;
    fetchCharacters(page, (searchQuery = ""));
  } else {
    alert(
      "Aw Jeez Rick. You you you cant't go back any further. Let's go home Rick. I miss Jessica"
    );
  }
}
