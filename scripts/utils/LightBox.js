// DOM Lightbox elements

let lightBox = document.getElementById('works-lightbox')
//const closeLightBoxButton = document.querySelector('.close-lightbox-icon');
let lightBoxPreviousMedia = document.querySelector('.left-arrow-lightbox')
let lightBoxNextMedia = document.querySelector('.right-arrow-lightbox')

let lightBoxMedia = document.getElementById('works-lightbox-media')
let lightBoxName = document.getElementById('works-lightbox-name')

let currentIndex = 0;

export function initLightBox(currentMedia, currentMediaName) {
   //console.log(currentMedia)
      console.log(currentMediaName)
    let medias = Array.from(document.getElementsByClassName('photographer-media-link'));
    
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
        console.log(currentIndex);
        currentIndex += 1;
        console.log(currentIndex);
        
        if (currentIndex > name.length - 1) {
          currentIndex = 0
        }
         //console.log(currentIndex);
        let mediaHtml = media[currentIndex]
        let mediaName = name[currentIndex]
  //console.log(mediaHtml);
  //console.log(mediaName);
        lightBoxMedia.innerHTML = `${mediaHtml}`
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
        let mediaName = name[currentIndex]

        lightBoxMedia.innerHTML = `${mediaHtml}`
        lightBoxName.innerHTML = `${mediaName}`
    })
}

function keyboardEvent(currentMedia, currentMediaName) {
    document.addEventListener('keydown', (event) => {
        
        // ESCAPE TO CLOSE
        if (event.code == 'Escape') {
            lightBox.style.display = 'none';
            }

            // ARROW RIGHT TO STEP RIGHT
            else if (event.code == 'ArrowRight') {
                currentIndex += 1;

                if (currentIndex > currentMediaName.length - 1) {
                    currentIndex = 0;
                }

                let src = currentMedia[currentIndex]
                let nameSrc = currentMediaName[currentIndex]

                lightBoxMedia.innerHTML = `${src}`
                lightBoxName.innerHTML = `${nameSrc}`

            }

            // ARROW LEFT TO STEP LEFT
            else if (event.code == 'ArrowLeft') {
                currentIndex -= 1;

                if (currentIndex < 0) {
                    currentIndex = currentMedia.length - 1;
                    currentIndex = currentMediaName.length - 1;
                }

                let src = currentMedia[currentIndex];
                let nameSrc = currentMediaName[currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
        });
    }