import { mediaFactory } from '../factories/media.js'
import { likeMedia } from './likeMedia.js'


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
  const openMenu = document.getElementsByClassName('sort-btn');
  const closeMenu = document.getElementsByClassName('arrow-up-close');
  const sortList = document.getElementsByClassName('sort-list');
  const sortOption = Array.from(document.getElementsByClassName('sort-option'));

  let mediaSorted = []

  if (openMenu) {
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
  if (closeMenu) {
    closeMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'none';
    });
    /*window.addEventListener('click',  (e) =>{
      if (e.target === sortList[0])
      sortList[0].style.display = 'none';
    });*/
  }
}
