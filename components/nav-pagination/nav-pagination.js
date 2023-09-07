
export function createPagination(numb, onClick) {
    const span = document.createElement("span");
    span.textContent = numb;
    span.addEventListener("submit",onClick);
    return span;
  }