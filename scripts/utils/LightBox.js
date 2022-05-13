// DOM Lightbox elements

const lightBox = document.getElementById('works-lightbox')
const lightBoxPreviousMedia = document.querySelector('.left-arrow-lightbox')
const lightBoxNextMedia = document.querySelector('.right-arrow-lightbox')

let lightBoxMedia = document.getElementById('works-lightbox-media')
let lightBoxName = document.getElementById('works-lightbox-name')
let currentIndex = 0

export function initLightBox(currentMedia, currentMediaName) {
  
  let medias = Array.from(document.getElementsByClassName('media'));

  medias.forEach((media, index) =>
    media.addEventListener('click', () => {
      let mediaHtml = currentMedia[index];
      let mediaName = currentMediaName[index];
      currentIndex = index;

      lightBox.style.display = 'block';
      lightBoxMedia.innerHTML = `${mediaHtml}`;
      lightBoxName.innerHTML = `${mediaName}`;
    }))

    closeLightBox()
    displayNextMedia(lightBoxNextMedia, currentMedia, currentMediaName)
    displayPreviousMedia(lightBoxPreviousMedia, currentMedia, currentMediaName)
  
    keyboardEvent(currentMedia, currentMediaName)

}


function closeLightBox() {
  const closeLightBox = document.querySelector('.close-lightbox-icon');

  closeLightBox.addEventListener('click', () => {
    lightBox.style.display = 'none'
  })
}


// Go to next media
function displayNextMedia(element, media, name) {
    
    element.addEventListener('click', () => {
        currentIndex += 1
        
        if (currentIndex > name.length - 1) {
          currentIndex = 0
        }
        let mediaHtml = media[currentIndex]
        let mediaName = name[currentIndex]
  
        lightBoxMedia.innerHTML = `${mediaHtml}`;
        lightBoxName.innerHTML = `${mediaName}`
    })
}

// Go to previous media
function displayPreviousMedia(element, media, name) {
     
    element.addEventListener('click', () => {
        currentIndex -= 1
        
        if (currentIndex < 0) {
            currentIndex = media.length - 1
        }

        let mediaHtml = media[currentIndex]
        console.log(mediaHtml)
        let mediaName = name[currentIndex]
console.log(mediaName);
        lightBoxMedia.innerHTML = `${mediaHtml}`
        lightBoxName.innerHTML = `${mediaName}`
    })
}