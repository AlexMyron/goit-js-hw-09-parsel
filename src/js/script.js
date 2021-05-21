import gallery from './gallery-items';
import { createMarkup } from './functions';
import { renderMarkup } from './functions';

export const galleryEl = document.querySelector('.js-gallery');
export const modalEl = document.querySelector('.js-lightbox');
export const modalImgEl = document.querySelector('.lightbox__image');

export const markupString = createMarkup(gallery);
export const arrOfSrces = gallery.map(e => e.original);

renderMarkup(markupString, galleryEl);
