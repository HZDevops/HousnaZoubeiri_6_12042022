import { mediaFactory } from '../factories/media.js'
import { likeMedia } from './likeMedia.js'

//DOM elements
const openMenu = document.getElementsByClassName('sort-btn')
const closeMenu = document.getElementsByClassName('arrow-up-close')
const sortList = document.getElementsByClassName('sort-list')
const sortOption = Array.from(document.getElementsByClassName('sort-option'))

//Sort medias by likes, date or title
export function getSortedMediaList(medias, typeSort) {
  let mediaSorted = [];

  if (medias.length == 0) {
    return medias;
  }
  if (typeSort == 'popularity') {
    return (mediaSorted = medias.sort(function (a, b) {
      return b.likes - a.likes;
    }));
  }
  if (typeSort == 'title') {
    return (mediaSorted = medias.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }));
  }
  if (typeSort == 'date') {
    return (mediaSorted = medias.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }));
  }

  return mediaSorted;
}

//Display media by sort list
function displaySortedMedia (mediasSorted, photographerId) {
  const mediaSortedSection = document.querySelector('.media-section')
  mediaSortedSection.innerHTML = ''

  mediasSorted.forEach((media) => {
    const mediaSortModel = mediaFactory(media, photographerId)
    const mediaSortCardDOM = mediaSortModel.getMediaCardDOM()
    mediaSortedSection.appendChild(mediaSortCardDOM)
  })
  likeMedia(mediasSorted, photographerId)
}

//Open and close drop-down sort menu
export function dropDownMenu(medias, photographerId) {
  keyboardEvent(medias, photographerId)
  
  if (openMenu) {
    dropDownMenuOpened(medias, photographerId)
  }
  if (closeMenu) {
    closeMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'none'
    })
  }
}

function dropDownMenuOpened (medias, photographerId) {
  let mediaSorted = []

  openMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'block';
    
    sortOption.forEach((option, index) => option.addEventListener('click', () => {
      if (index == 0) {
        mediaSorted = getSortedMediaList(medias, 'popularity')
        displaySortedMedia(mediaSorted, photographerId)
      }
      else if (index == 1) {
        mediaSorted = getSortedMediaList(medias, 'date')
        displaySortedMedia(mediaSorted, photographerId)
       }
      else if (index == 2) {
        mediaSorted = getSortedMediaList(medias, 'title')
        displaySortedMedia(mediaSorted, photographerId)      
      }
    }))
  })
}

function keyboardEvent (medias, photographerId) {
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
      dropDownMenuOpened(medias, photographerId)
    }
    // ARROW RIGHT TO STEP RIGHT
    else if (event.code == 'Escape') {
      sortList[0].style.display = 'none';
    }
  })
}