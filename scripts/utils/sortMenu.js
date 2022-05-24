import { displayPhotographerMedia } from '../pages/photographer.js'


//Open and close drop-down sort menu
export function dropDownMenu(medias, photographerId) {
  let openMenu = document.getElementsByClassName('sort-btn');
  let closeMenu = document.getElementsByClassName('arrow-up-close');
  let sortList = document.getElementsByClassName('sort-list');
  
  //keyboardEvent(medias, photographerId);

  if (openMenu) {
    openMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'block';
    });
    sortMedias(medias, photographerId)
  }
  if (closeMenu) {
    closeMenu[0].addEventListener('click', () => {
      sortList[0].style.display = 'none';
    });
  }
}

//Sort photographer medias by likes, date and title
function sortMedias(medias, photographerId) {
  let mediaSorted = [];
  let sortButton = document.querySelector('.sort-btn');
  let sortList = document.getElementsByClassName('sort-list');
  let sortOption = Array.from(document.getElementsByClassName('sort-option'));

  sortOption.forEach((option, index) => option.addEventListener('click', () => {
    sortList[0].style.display = 'none'

    if (index == 0) {
      sortButton.innerHTML = `Popularité`;

      mediaSorted = medias.sort((a, b) => { 
      return b.likes - a.likes
      })
      } else if (index == 1) {
      sortButton.innerHTML = `Date`;

      mediaSorted = medias.sort((a, b) => { 
      return new Date(b.date) - new Date(a.date)
      })
    } else if (index == 2) {
      sortButton.innerHTML = `Titre`;

      mediaSorted = medias.sort((a, b) => { 
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
     })
    }
  displaySortedMedia(mediaSorted, photographerId)
  }))
}

//Display sorted medias
function displaySortedMedia(mediasSorted, photographerId) {

  const mediaSortedSection = document.querySelector('.media-section')
  const lightBox = document.getElementById('works-lightbox')
  
  mediaSortedSection.innerHTML = ''
  lightBox.innerHTML = ''

  displayPhotographerMedia(mediasSorted, photographerId)
}


/*function keyboardEvent(medias, photographerId) {
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
      dropDownMenuOpened(medias, photographerId);
    }
    // ARROW RIGHT TO STEP RIGHT
    else if (event.code == 'Escape') {
      sortList[0].style.display = 'none';
    }
  });
}*/
