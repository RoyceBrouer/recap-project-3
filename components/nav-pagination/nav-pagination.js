export const navigation = document.querySelector('[data-js="navigation"]');

export function createPagination(page, maxPage) {
  const span = document.createElement("span");
  // span.textContent = `${page}/${maxPage}`;
  // // span.addEventListener("submit", onClick);
  return span;
}
