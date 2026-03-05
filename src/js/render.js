const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-wrapper');

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
<a class="gallery-link" href="${largeImageURL}">
<img
class="gallery-img"
src="${webformatURL}"
alt="${tags}"
/>
</a>

<div class="info">
<p>Likes ${likes}</p>
<p>Views ${views}</p>
<p>Comments ${comments}</p>
<p>Downloads ${downloads}</p>
</div>
</li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

export function showLoader() {
  loader.style.display = 'flex';
}

export function hideLoader() {
  loader.style.display = 'none';
}
