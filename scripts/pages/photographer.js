import { getData } from '../utils/getData.js'
import { photographerFactory } from '../factories/photographer.js'
import { mediaFactory } from '../factories/media.js'
import { likeMedia } from '../utils/likeMedia.js'
import { dropDownMenu } from '../utils/sortMenu.js'
import { displayModal } from '../utils/contactForm.js'
import { initLightBox } from '../utils/LightBox.js'

//Get the photographer id from URL query string and return photagrapher details
export function getPhotographerDetails(data) {
  
  const photographers = data.photographers;
  const medias = data.media;

  const urlSearchParams = new URLSearchParams(window.location.search)
  const photographerIdInUrl = urlSearchParams.get('id')
  const photographer = photographers.find(
    (element) => element.id == photographerIdInUrl
  );
  const mediaListPhotographer = medias.filter(
    (element) => element.photographerId == photographerIdInUrl
  );
  console.log(mediaListPhotographer)

  return { photographer, photographerIdInUrl, mediaListPhotographer }
}

//Display photographer details on photographer page
function displayPhotographerBanner(photographer) {
  const banner = document.querySelector('.photograph-header')
  const photographerModel = photographerFactory(photographer)

  banner.appendChild(photographerModel.getUserInformation())
  banner.appendChild(photographerModel.getUserPicture())
}

//Display medias, price and likes number photographer
export function displayPhotographerMedia(medias, photographer,photographerId) {
  const mediaSection = document.querySelector('.media-section')
  const likeSection = document.querySelector('.like-section')
 
  let mediaHtml = []
  let mediaName = []
 
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media, photographerId)
    const mediaCardDOM = mediaModel.getMediaCardDOM()
    mediaSection.appendChild(mediaCardDOM)
  })

  const mediaDOM = mediaFactory(medias, photographerId)
  mediaHtml = mediaDOM.getMediaDOM(medias).mediaHtmlArray
  mediaName = mediaDOM.getMediaDOM(medias).mediaNameArray

  const totalLikes = mediaDOM.getLikeDOM(medias)

  const likeCounterSection = `
        <div class="like-counter">
          <p id="total-like-number">${totalLikes}</p>
          <i class="fas fa-heart"></i>
        </div>
        <p>${photographer.price}&euro; / jour</p>
    `
  likeSection.innerHTML = likeCounterSection
  
  initLightBox(mediaHtml, mediaName)
}

//Display photographer page
async function init() {
  const data = await getData()
  const photographerData = getPhotographerDetails(data)

  const photographer = photographerData.photographer
  const photographerId = photographerData.photographerIdInUrl
  const mediasByPhotographer = photographerData.mediaListPhotographer

  displayPhotographerBanner(photographer)
  dropDownMenu(mediasByPhotographer, photographer, photographerId)
  displayModal(photographer)
  displayPhotographerMedia(mediasByPhotographer, photographer, photographerId)
  likeMedia()
}

init()

