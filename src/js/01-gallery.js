import SimpleLightbox from "../../node_modules/simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const itemsMarkup = itemsMarkupCreating(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', itemsMarkup);

//MARKUP CREATING

function itemsMarkupCreating(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                  />
              </a> 
        </div>`
 
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });