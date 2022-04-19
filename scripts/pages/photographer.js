import { getData } from '../utils/apiData.js'


/**
 * Get the photographer id from URL query string
 * @returns {String} 
 **/
function getPhotographerIdFromUrl() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const PhotographerIdInUrl = urlSearchParams.get('id')
  return PhotographerIdInUrl
}

/**
 * Diplay photographer description
 * @param {String} photographerId
 **/
async function displayPhotographerDecription(photographerId) {
  const Data = await getData()
  const photographers = Data.photographers
  const medias = Data.media
  const photographerItem = photographers.find( (element) => element.id == photographerId)
  
  const photographerHeaderSection = document.querySelector('.photograph-header');
  const photographerHeaderOnHTML = `
    <div class='photograph-header-left'>
        <h1 class='card-name'>${photographerItem.name}</h1>
        <p class='card-location'>${photographerItem.city}, ${photographerItem.country}</p>
        <p class="card-tagline">${photographerItem.tagline}</p>
    </div>
    <div class='photograph-header-right'>
      <img class="card-image" src="assets/photographers/Photographers ID Photos/${photographerItem.portrait}" alt="${photographerItem.name}">
    </div>
  `;
  photographerHeaderSection.innerHTML += photographerHeaderOnHTML
}
const id = getPhotographerIdFromUrl()
displayPhotographerDecription(id)

//getPhotographerMedias(id)
// Display an photographer details on photographer page
/*function displayPhotographerOnHtml(photographer) {
  const itemHtmlContainer = document.getElementById('teddy-card');

  itemHtmlContainer.innerHTML += `
      <img src="$ photographer.imageUrl}" alt="teddy-photo"/>
      <h3>$ photographer
    .name}</h3>
      <p>$ photographer
    .description}</p>
      <span>Prix: $ photographer
    .price / 100} €</span>
    `;
 photographer.colors.forEach(function (option) {
    const itemOptionsSelectHtml = document.getElementById(
      'teddy-colors-select'
    );
    const itemOptionHtml = document.createElement('option');
    itemOptionsSelectHtml.appendChild(itemOptionHtml).innerHTML += option;
  });
}*/
