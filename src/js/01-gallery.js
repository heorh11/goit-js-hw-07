import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const GalleryItemsMarkup = galleryItems.map(galleryItem => `
    <li class='gallry__item'>
     <a class='gallery__link' href='${item.original}'>
      <img class='gallery__image'
      src='${item.preview}'>
      alt='${item.description}'
      data-source='${item.original}'>
      </img>
     </li>
    </a>
`).join('')
galleryContainer.innerHTML = GalleryItemsMarkup;

galleryContainer.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.tagName === 'IMG') {
        const largeImgSrc = evt.target.getAttribute('data-source')
    }
} )



const instance = basicLightbox.create(`
<div>
    <img src="assets/images/image.png" width="800" height="600">
    </div>
`)

instance.show()
console.log(galleryItems);
