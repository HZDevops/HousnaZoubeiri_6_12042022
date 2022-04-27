import { getData } from '../utils/apiData.js'
import { photographerFactory } from '../factories/photographer.js'
//import { mediaFactory } from '../factories/media.js'

/**
 * Get the photographer id from URL query string and return photagrapher details
 * @param {Array} data
 * @returns {Object}
 **/
function getPhotographerDetails(data) {

  const photographers = data.photographers
  const urlSearchParams = new URLSearchParams(window.location.search)
  const photographerIdInUrl = urlSearchParams.get('id')
  const photographer = photographers.find((element) => element.id == photographerIdInUrl);
  
  return photographer
}

/**
 * Get photographer details and display photographer description
 * @param {String} id
 * @returns {Array}
 **
async function getPhotographerDetails(pht) {
  const photographers = data.photographers
  
  const photographerItem = photographers.find((element) => element.id == id)
  
  //const photographerModel = photographerFactory(photographerItem)
  const photographerHeaderSection =
    document.querySelector('.photograph-header');
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
  return photographerItem
}*/

function displayPhotographerBanner(photographer) {
  const banner = document.querySelector('.photograph-header')
  const photographerModel = photographerFactory(photographer)
  
  banner.appendChild(photographerModel.getUserInformation())
  banner.appendChild(photographerModel.getUserPicture())
}

/*
function displayPhotographerMedia(identity, data) {
  const mediaModel = mediaFactory (identity, data)
  const mediaListPhotographer = mediaModel.createMediaList()
  
  const display = mediaModel.getMediaByType(mediaListPhotographer);
  //console.log(display)
}*/

const data = await getData()
const photographer = getPhotographerDetails(data)
displayPhotographerBanner(photographer)
//const photographerIdentity = await displayPhotographerIdentity(photographerId, data)
//console.log(photographerIdentity)
//displayPhotographerMedia(photographerIdentity, data)