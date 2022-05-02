import { getData } from '../utils/apiData.js'
import { photographerFactory } from '../factories/photographer.js'
import { mediaFactory } from '../factories/media.js'
import { likeMedia, /*totalLikesPhotographer */} from '../utils/likeMedia.js';

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


// Display medias, price and likes number photographer 
function displayPhotographerMedia(medias, photographerId) {
  const mediaSection = document.querySelector(".media-section")
  const likeSection = document.querySelector(".like-section")
    
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media, photographerId)
    const mediaCardDOM = mediaModel.getMediaCardDOM()
    mediaSection.appendChild(mediaCardDOM)
  })

  const totalLikes = mediaFactory(medias, photographerId).getLikeDOM(medias)
  const likeCounterSection = `
        <div class="like-counter">
          <p id="total-like-number">${totalLikes}</p>
          <i class="fas fa-heart"></i>
        </div>
        <p>${photographer.price}&euro; / jour</p>
    `
  likeSection.innerHTML = likeCounterSection
}

const data = await getData()
const photographerData = getPhotographerDetails(data)

const photographer = photographerData.photographer
const photographerId = photographerData.photographerIdInUrl
const mediasByPhotographer = photographerData.mediaListPhotographer

displayPhotographerBanner(photographer)
displayPhotographerMedia(mediasByPhotographer, photographerId)
likeMedia(mediasByPhotographer, photographerId)
//const likesNumber = totalLikesPhotographer(mediasByPhotographer, photographerId)
//displayLikePhotographer(photographer)
/*const likeCounter = document.querySelector('#total-like-number');
likeCounter.innerHTML = likesNumber*/