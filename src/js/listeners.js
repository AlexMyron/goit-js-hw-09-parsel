import { galleryEl } from './script';
import { modalEl } from './script';
import * as funcList from './functions';

galleryEl.addEventListener('click', funcList.onClickModalOpen);
modalEl.addEventListener('click', funcList.onClickModalClose);
modalEl.addEventListener('click', funcList.onClickOverlayModalClose);
window.addEventListener('keydown', funcList.onKeydownBtnModalClose);
window.addEventListener('keydown', funcList.onKeydownNextImg);
window.addEventListener('keydown', funcList.onKeydownPrewImg);
