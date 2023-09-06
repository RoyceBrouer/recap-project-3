
export function createPagination(numb="1 / 1", onSubmit) {
    const span = document.createElement("span");
    span.textContent = numb;
    span.addEventListener("submit",onSubmit)
    return span;
  }