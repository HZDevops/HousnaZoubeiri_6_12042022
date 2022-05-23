// DOM Lightbox elements

let lightBox = document.getElementById('works-lightbox');
let lightBoxMedia = document.getElementById('works-lightbox-media');
let lightBoxName = document.getElementById('works-lightbox-name');


let currentIndex = 0;

export function initLightBox(currentMedia, currentMediaName) {
  
  let medias = Array.from(document.getElementsByClassName('media'))

  medias.forEach((media, index) =>
    media.addEventListener('click', () => {
      let mediaHtml = currentMedia[index];
      let mediaName = currentMediaName[index];
      currentIndex = index;
      const lightBoxBody = `
      <div id="lightbox-body" role="dialog">
        <span class="fas fa-times close-lightbox-icon" role="button" aria-label="image closeup view"></span>
        <span class="fas fa-chevron-left lightbox-left-arrow" role="button" aria-label="Previous image"></span>
        <span class="fas fa-chevron-right lightbox-right-arrow" role="button" aria-label="Next image"></span>
        <div id="works-lightbox-media">${mediaHtml}</div>
        <div id="works-lightbox-name">${mediaName}</div>
      </div>`;

      lightBox.style.display = 'block';
      lightBox.innerHTML = lightBoxBody
      /*lightBoxMedia.innerHTML = `${mediaHtml}`;
      console.log(mediaHtml)
      console.log(mediaName)
      lightBoxName.innerHTML = `${mediaName}`;
      console.log(mediaHtml);*/
    })
  );


  displayNextMedia(document.querySelector('.lightbox-right-arrow'),currentMedia, currentMediaName);
  displayPreviousMedia(document.querySelector('.lightbox-left-arrow'), currentMedia, currentMediaName);
  closeLightBox()
  keyboardEvent(currentMedia, currentMediaName)
}

function closeLightBox() {
  let closeLightBoxButton = document.querySelector('.close-lightbox-icon')
    closeLightBoxButton.addEventListener('click', () => {
    lightBox.style.display = 'none';
  });
}

// Go to next media
export function displayNextMedia(elt,media, name) {
console.log('bonjour')
console.log(elt);
  elt.addEventListener('click', () => {
    console.log('bonjour');
      currentIndex += 1;
  console.log(currentIndex)
      if (currentIndex > name.length - 1) {
        currentIndex = 0;
      }
      let mediaHtml = media[currentIndex];
      console.log(mediaHtml);
      let mediaName = name[currentIndex];

      lightBoxMedia.innerHTML = `${mediaHtml}`;
      lightBoxName.innerHTML = `${mediaName}`;
    });
  
}

//Go to previous media
function displayPreviousMedia(elt,media, name) {
  
  elt.addEventListener('click', () => {
    currentIndex -= 1;

    if (currentIndex < 0) {
      currentIndex = media.length - 1;
    }

    let mediaHtml = media[currentIndex];
    let mediaName = name[currentIndex];

    lightBoxMedia.innerHTML = `${mediaHtml}`;
    lightBoxName.innerHTML = `${mediaName}`;
  });
}

function keyboardEvent(currentMedia, currentMediaName) {
  document.addEventListener('keydown', (event) => {
    // ESCAPE TO CLOSE
    if (event.code == 'Escape') {
      lightBox.style.display = 'none';
    }

    // ARROW RIGHT TO STEP RIGHT
    else if (event.code == 'ArrowRight') {
console.log(currentIndex)
      currentIndex += 1;
console.log(currentIndex);
      if (currentIndex > currentMediaName.length - 1) {
        currentIndex = 0;
      }

      let src = currentMedia[currentIndex];
      let nameSrc = currentMediaName[currentIndex];
console.log(src)
      lightBoxMedia.innerHTML = `${src}`;
      console.log(lightBoxMedia)
      lightBoxName.innerHTML = `${nameSrc}`;
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
