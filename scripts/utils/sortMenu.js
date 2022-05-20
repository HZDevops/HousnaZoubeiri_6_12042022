import { displayPhotographerMedia } from '../pages/photographer.js';

let sortList = document.getElementsByClassName('sort-list')

//Open and close drop-down sort menu
export function dropDownMenu(medias, photographerId) {
  let openMenu = document.getElementsByClassName('sort-btn')
  let closeMenu = document.getElementsByClassName('arrow-up-close');
  
  keyboardEvent(medias, photographerId)
  
  if (openMenu) {
    openMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'block';
    });
    displaySortedMedia(medias, photographerId)
  }
  if (closeMenu) {
    closeMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'none'
    })
  }
}

//Display sorted photographer media
function displaySortedMedia (medias, photographerId) {
 
  let btnSort = document.querySelector('.sort-btn')
  let sortList = document.getElementsByClassName('sort-list')
  let sortOption = Array.from(document.getElementsByClassName('sort-option'))
  
  let mediaSorted = []

     sortOption.forEach((option, index) => option.addEventListener('click', () => {
      sortList[0].style.display = 'none';
      
      if (index == 0) {
        btnSort.innerHTML='Popularité'
        mediaSorted = getSortedMediaList(medias, 'popularity')
      }
      else if (index == 1) {
        btnSort.innerHTML = 'Date'
        mediaSorted = getSortedMediaList(medias, 'date')
      }
      else if (index == 2) {
        btnSort.innerHTML = 'Titre'
        mediaSorted = getSortedMediaList(medias, 'title')    
      }
      displayPhotographerMedia(mediaSorted, photographerId)
    }))
}

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

//Handle keyboard event for accessibility
function keyboardEvent (medias, photographerId) {

  document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
      displaySortedMedia(medias, photographerId)
    }
    // ARROW RIGHT TO STEP RIGHT
    else if (event.code == 'Escape') {
      sortList[0].style.display = 'none';
    }
  })
}