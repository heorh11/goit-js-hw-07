
import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item => `
  <li class='gallery__item'>
    <a class='gallery__link' href='${item.original}'>
      <img class='gallery__image' src='${item.preview}' alt='${item.description}' data-source='${item.original}'>
    </a>
  </li>
`).join('');

galleryContainer.innerHTML = galleryMarkup;

// Create a new instance of SimpleLightbox outside the click event
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryContainer.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target.tagName === 'IMG') {
    const largeImgSrc = evt.target.getAttribute('data-source');
    // Use the existing lightbox instance to show the clicked image
    lightbox.open({ items: [largeImgSrc] });
  }
});

console.log(galleryItems);


