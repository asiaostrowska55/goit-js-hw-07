import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("ul.gallery");

const galleryMarkup = galleryItems
  .map(
    (image) => `<div class="gallery__item">
<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</div>`
  )
  .join("");

console.log(galleryItems);
