import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './api.js';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) return;

  clearGallery();

  showLoader();

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        showNoResultsMessage();
        return;
      }

      renderGallery(data.hits);
      lightBox.refresh();
    })
    .catch(handleError)
    .finally(() => hideLoader());

  form.reset();
}

function showNoResultsMessage() {
  iziToast.warning({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

function handleError(error) {
  console.error(error);
}
