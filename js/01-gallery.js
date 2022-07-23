import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');
const markupImg = createGalleryItem(galleryItems);

galleryImg.insertAdjacentHTML('beforeend', markupImg);

galleryImg.addEventListener('click', onGallaryImgClick);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview , original, description})=>{
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>
        `;
    }).join('');
}

function onGallaryImgClick(evt) {
    evt.preventDefault();

  if (evt.target.classList.contains('gallery')) return;
    const source = evt.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${source}" width="800" heigth="600">`,
        {
            onShow: instance => {
                document.addEventListener('keydown', onEscapeBtn);
            },
            onClose: instance => {
                document.removeEventListener('keydown', onEscapeBtn);
            }
        }
    )
    
    instance.show();  

    function onEscapeBtn(e) {
    if (e.code === 'Escape') instance.close()
    }
}

// console.log(galleryItems);
// console.log(createGalleryItem(galleryItems))