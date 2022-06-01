import { displayPhotographerMedia } from '../pages/photographer.js'
import { likeMedia } from './likeMedia.js'

//Open and close drop-down sort menu
export function dropDownMenu(medias, photographer, photographerId) {
  let openMenu = document.getElementsByClassName('sort-btn')
  let closeMenu = document.getElementsByClassName('arrow-up-close')
  let sortList = document.getElementsByClassName('sort-list')

  keyboardEvent(medias, photographer, photographerId)

  if (openMenu) {
    openMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'block'
    })
    sortMedias(medias, photographer, photographerId)
  }
  if (closeMenu) {
    closeMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'none'
    })
  }
}

//Sort photographer medias by likes, date and title
function sortMedias(medias, photographer, photographerId) {
  let mediaSorted = []

  let sortButton = document.querySelector('.sort-btn')
  let sortList = document.getElementsByClassName('sort-list')
  let sortOption = Array.from(document.getElementsByClassName('sort-option'))

  const arrowDown = document.createElement('span')
  arrowDown.classList.add('fas','fa-chevron-down','arrow-down-open')
  
  sortOption.forEach((option, index) => option.addEventListener('click', () => {
    sortList[0].style.display = 'none'

    if (index === 0) {
      sortButton.innerHTML = `Popularité` 
      sortButton.appendChild(arrowDown)
      
      mediaSorted = medias.sort((a, b) => { 
        return b.likes - a.likes
      })
    } else if (index === 1) {
      sortButton.innerHTML = `Date`
      sortButton.appendChild(arrowDown)

      mediaSorted = medias.sort((a, b) => { 
        return new Date(b.date) - new Date(a.date)
      })
    } else if (index === 2) {
      sortButton.innerHTML = `Titre`
      sortButton.appendChild(arrowDown)

      mediaSorted = medias.sort((a, b) => { 
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    }
    displaySortedMedia(mediaSorted, photographer, photographerId)
  }))
}

//Display sorted medias
function displaySortedMedia(mediasSorted, photographer, photographerId) {
  const mediaSortedSection = document.querySelector('.media-section')
  const lightBox = document.getElementById('works-lightbox')
  
  mediaSortedSection.innerHTML = ''
  lightBox.innerHTML = ''

  displayPhotographerMedia(mediasSorted, photographer, photographerId)
  likeMedia()
}

//Handle keyboard events for drop-down menu navigation
function keyboardEvent(medias, photographer, photographerId) {
  let mediaSorted = []

  let sortButton = document.querySelector('.sort-btn')
  let sortOption = Array.from(document.getElementsByClassName('sort-option'))
  let sortList = document.getElementsByClassName('sort-list')
  
  const arrowDown = document.createElement('span')
  arrowDown.classList.add('fas', 'fa-chevron-down', 'arrow-down-open')

  sortOption.forEach((option, index) =>
    option.addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        sortList[0].style.display = 'none';

        if (index === 0) {
          sortButton.innerHTML = `Popularité`;
          sortButton.appendChild(arrowDown);

          mediaSorted = medias.sort((a, b) => {
            return b.likes - a.likes;
          });
        } else if (index === 1) {
          sortButton.innerHTML = `Date`;
          sortButton.appendChild(arrowDown);

          mediaSorted = medias.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
        } else if (index === 2) {
          sortButton.innerHTML = `Titre`;
          sortButton.appendChild(arrowDown);

          mediaSorted = medias.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
        }
        displaySortedMedia(mediaSorted, photographer, photographerId);
      }
    })
  )
}
