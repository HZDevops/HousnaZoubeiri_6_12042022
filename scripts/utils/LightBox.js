// DOM Lightbox elements
const lightBox = document.getElementById('works-lightbox')

let currentIndex = 0

//Display Lightbox
export function initLightBox(currentMedia, currentMediaName) {
  let medias = Array.from(document.getElementsByClassName('media'))
  let lightBox = document.getElementById('works-lightbox');
  
  const lightBoxBody = `
      <div id="lightbox-body" role="dialog">
        <span class="fas fa-times close-lightbox-icon" role="button" aria-label="image closeup view"></span>
        <span class="fas fa-chevron-left lightbox-left-arrow" role="button" aria-label="Previous image"></span>
        <span class="fas fa-chevron-right lightbox-right-arrow" role="button" aria-label="Next image"></span>
        <div id="works-lightbox-media"></div>
        <div id="works-lightbox-name"></div>
      </div>`;
  lightBox.innerHTML = lightBoxBody

  let lightBoxMedia = document.getElementById('works-lightbox-media');
  let lightBoxName = document.getElementById('works-lightbox-name');

  medias.forEach((media, index) =>
    media.addEventListener('click', () => {
      let mediaHtml = currentMedia[index];
      let mediaName = currentMediaName[index];
      
      currentIndex = index;

      lightBox.style.display = 'block';
      lightBoxMedia.innerHTML = `${mediaHtml}`;
      lightBoxName.innerHTML = `${mediaName}`;
    }));

  closeLightBox()
  displayNextMedia(currentMedia, currentMediaName)
  displayPreviousMedia(currentMedia, currentMediaName);
  keyboardEvent(currentMedia, currentMediaName)
}

// Close LightBox
function closeLightBox() {
  let closeLightBoxButton = document.querySelector('.close-lightbox-icon')

  closeLightBoxButton.addEventListener('click', () => {
    lightBox.style.display = 'none'
  })
}

// Display next media in Lightbox
function displayNextMedia(media, name) {
let lightBoxMedia = document.getElementById('works-lightbox-media')
let lightBoxName = document.getElementById('works-lightbox-name')
const nextButton = document.querySelector('.lightbox-right-arrow')

nextButton.addEventListener('click', () => {
    currentIndex += 1
   
    if (currentIndex > name.length - 1) {
      currentIndex = 0
    }
    let mediaHtml = media[currentIndex]
    let mediaName = name[currentIndex]

    lightBoxMedia.innerHTML = `${mediaHtml}`
    lightBoxName.innerHTML = `${mediaName}`
  })
  
}

//Display previous media in Lightbox
function displayPreviousMedia(media, name) {
  let lightBoxMedia = document.getElementById('works-lightbox-media')
  let lightBoxName = document.getElementById('works-lightbox-name')
  const previousButton = document.querySelector('.lightbox-left-arrow')

  previousButton.addEventListener('click', () => {
    currentIndex -= 1

    if (currentIndex < 0) {
      currentIndex = media.length - 1
    }

    let mediaHtml = media[currentIndex]
    let mediaName = name[currentIndex]

    lightBoxMedia.innerHTML = `${mediaHtml}`
    lightBoxName.innerHTML = `${mediaName}`
  });
}

function keyboardEvent(currentMedia, currentMediaName) {
  let lightBoxMedia = document.getElementById('works-lightbox-media')
  let lightBoxName = document.getElementById('works-lightbox-name')
  
  document.addEventListener('keydown', (event) => {
    // ESCAPE TO CLOSE
    if (event.code == 'Escape') {
      lightBox.style.display = 'none';
    }

    // ARROW RIGHT TO STEP RIGHT
    else if (event.code == 'ArrowRight') {
      currentIndex += 1
      if (currentIndex > currentMediaName.length - 1) {
        currentIndex = 0
      }
      let src = currentMedia[currentIndex]
      let nameSrc = currentMediaName[currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      console.log(lightBoxMedia)
      lightBoxName.innerHTML = `${nameSrc}`
    }

    // ARROW LEFT TO STEP LEFT
    else if (event.code == 'ArrowLeft') {
      currentIndex -= 1
      if (currentIndex < 0) {
        currentIndex = currentMedia.length - 1
        currentIndex = currentMediaName.length - 1
      }
      let src = currentMedia[currentIndex]
      let nameSrc = currentMediaName[currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    }
  })
}
