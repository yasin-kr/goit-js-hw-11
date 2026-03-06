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
  <div class="info-item">
    <span class="info-label">Likes</span>
    <span class="info-value">${likes}</span>
  </div>

  <div class="info-item">
    <span class="info-label">Views</span>
    <span class="info-value">${views}</span>
  </div>

  <div class="info-item">
    <span class="info-label">Comments</span>
    <span class="info-value">${comments}</span>
  </div>

  <div class="info-item">
    <span class="info-label">Downloads</span>
    <span class="info-value">${downloads}</span>
  </div>
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
