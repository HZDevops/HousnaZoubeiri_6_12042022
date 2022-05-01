import { getData } from '../utils/apiData.js'
import { photographerFactory } from '../factories/photographer.js'
import { mediaFactory } from '../factories/media.js'
import { likeMedia } from '../utils/likeMedia.js'

/**
 * Get the photographer id from URL query string and return photagrapher details
 * @param {Array} data
 * @returns {Object}
 **/
function getPhotographerDetails(data) {

  const photographers = data.photographers
  const medias = data.media
  
  const urlSearchParams = new URLSearchParams(window.location.search)
  const photographerIdInUrl = urlSearchParams.get('id')
  const photographer = photographers.find((element) => element.id == photographerIdInUrl)
  const mediaListPhotographer = medias.filter((element) => element.photographerId == photographerIdInUrl)
   
  return { photographer, photographerIdInUrl, mediaListPhotographer}
}

/**
 * Display photographer details on photographer page
 * @param {Object} photographer
 **/

function displayPhotographerBanner(photographer) {
  const banner = document.querySelector('.photograph-header')
  const photographerModel = photographerFactory(photographer)
  
  banner.appendChild(photographerModel.getUserInformation())
  banner.appendChild(photographerModel.getUserPicture())
}


// Display photographer medias
function displayPhotographerMedia(medias, photographerId) {
  const mediaSection = document.querySelector(".media-section")
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media, photographerId)
    const mediaCardDOM = mediaModel.getMediaCardDOM()
    mediaSection.appendChild(mediaCardDOM)
  })
}

const data = await getData()
const photographerData = getPhotographerDetails(data)

const photographer = photographerData.photographer
const photographerId = photographerData.photographerIdInUrl
const mediasByPhotographer = photographerData.mediaListPhotographer

displayPhotographerBanner(photographer)
displayPhotographerMedia(mediasByPhotographer, photographerId)
likeMedia()