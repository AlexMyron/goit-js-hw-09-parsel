import { modalEl } from './script';
import { modalImgEl } from './script';
import { arrOfSrces } from './script';

export function createMarkup(imgList) {
  return imgList
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

export function renderMarkup(string, parentNode) {
  parentNode.insertAdjacentHTML('beforeend', string);
}

export function onClickModalOpen(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  modalEl.classList.add('is-open');
  modalImgEl.src = e.target.dataset.source;
}

export function onKeydownBtnModalClose(e) {
  if (e.code !== 'Escape') {
    return;
  }
  modalEl.classList.remove('is-open');
}

export function onClickModalClose(e) {
  if (e.target.dataset.action !== 'close-lightbox') {
    return;
  }
  modalEl.classList.remove('is-open');
}

export function onClickOverlayModalClose(e) {
  if (e.target.classList.contains('lightbox__image')) {
    return;
  }
  modalEl.classList.remove('is-open');
}

export function onKeydownNextImg(e) {
  if (
    e.code !== 'ArrowRight' ||
    modalImgEl.src === arrOfSrces[arrOfSrces.length - 1]
  ) {
    return;
  }

  let bufferValue;
  arrOfSrces.forEach((source, idx) => {
    if (modalImgEl.src === source) {
      modalImgEl.src = '';
      bufferValue = arrOfSrces[idx + 1];
    }
  });
  return (modalImgEl.src = bufferValue);
}

export function onKeydownPrewImg(e) {
  if (e.code !== 'ArrowLeft' || modalImgEl.src === arrOfSrces[0]) {
    return;
  }

  arrOfSrces.forEach((source, idx) => {
    if (modalImgEl.src === source) {
      modalImgEl.src = '';
      return (modalImgEl.src = arrOfSrces[idx - 1]);
    }
  });
}
