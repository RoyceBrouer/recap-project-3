
export function createPagination(numb, onSubmit) {
    const span = document.createElement("span");
    span.textContent = numb;
    span.addEventListener("submit",onSubmit)
    return span;
  }