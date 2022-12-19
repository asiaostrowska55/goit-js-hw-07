"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("div.gallery");

const galleryMarkup = galleryItems
  .map(
    (image) => `<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", (select) => {
  select.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${select.target.dataset.source}"/>
`);
  instance.show();

  document.addEventListener("keydown", (close) => {
    if (close.key !== "ESC") {
      instance.close();
    }
  });
});
