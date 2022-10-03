// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// // Change code below this line

const galleryContainer = document.querySelector( '.gallery')

const galleryMarkup = createImageCardMarkup(galleryItems);

function createImageCardMarkup(galleryItems){
    return galleryItems.map(({preview, original, description }) => {
    return`<div class="gallery__item">
    <a class="gallery__link" 
    href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
   }).join(" ")  
}
galleryContainer.insertAdjacentHTML( 'beforeend', galleryMarkup)
const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      captionType: 'alt',
    });


