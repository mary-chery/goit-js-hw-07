import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// import * as basicLightbox from 'basiclightbox'

const galleryEl = document.querySelector(".gallery");

const createGalleryEl = galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a>
    </div>`
    }).join('');

galleryEl.innerHTML = createGalleryEl;
    

galleryEl.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    } else basicLightbox
    .create(` <img src="${event.target.dataset.source}">` ).show();
}