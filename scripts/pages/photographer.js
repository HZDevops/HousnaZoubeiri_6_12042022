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
  console.log(photographerItem);
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
