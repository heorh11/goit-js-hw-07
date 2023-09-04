import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const GalleryMarkup = galleryItems.map(item => `
  <li class='gallry__item'>
    <a class='gallery__link' href='${item.original}'>
      <img class='gallery__image' src='${item.preview}' alt='${item.description}' data-source='${item.original}'>
    </a>
  </li>
`).join('');

galleryContainer.innerHTML = GalleryMarkup;

galleryContainer.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target.tagName === 'IMG') {
    const largeImgSrc = evt.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
      <div>
        <img src="${largeImgSrc}" width="800" height="600">
      </div>
    `);
    instance.show();
  }
});

console.log(galleryItems);
console.log(galleryItems);




