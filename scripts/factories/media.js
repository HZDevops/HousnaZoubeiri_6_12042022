export function mediaFactory (data, photographerId) {

  const { id, title, image, video, likes, date, price } = data

  //Create photographer media list
  function getMediaCardDOM(medias) {

    const article = document.createElement('article')
    const divMedia = document.createElement('div')
    //const h2 = document.createElement('h2')

    article.classList.add('media-card')
    //h2.textContent = title

    if (image) {
      const imageMedia = `
        <a href="#" class="photographer-media-link">
          <img class="media-image" id=${id} src="../assets/photographers/${photographerId}/${image}" alt="photo ${title}"></img>
        </a>
        <div class="media-info">
          <p class="media-info-title">${title}</p>
          <div class="media-info-like">
            <span >${likes}</span>
            <i class="fas fa-heart"></i>
          </div>
        </div>
      `;
      article.innerHTML = imageMedia
          /*const img = document.createElement('img');
          img.setAttribute(
            'src',
            `assets/photographers/${photographerId}/${image}`
          );
          img.alt = `Picture ` + title
          img.tabIndex = 0
          img.addEventListener('click', function () {
            openView(id)
          });
          img.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
              openView(id)
            }
          });*/
    } else if (video) {
      const videoMedia = `
        <a href="" class="photographer-media-link">
          <video id=${id} class="media-image">
            <source src="../assets/photographers/${photographerId}/${video}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
        </a>
        <div class="media-info">
          <p class="media-info-title">${title}</p>
          <div class="media-info-like">
            <span >${likes}</span>
            <i class="fas fa-heart"></i>
          </div>
        </div>
      `;
      article.innerHTML = videoMedia
          /*const movie = document.createElement('video');
          const source = document.createElement('source');
          source.setAttribute(
            'src',
            `assets/photographers/${photographerId}/${video}`
          );
          source.setAttribute('type', `video/` + video.split('.').pop());
          movie.appendChild(source);
          movie.tabIndex = 0
          movie.addEventListener('click', function () {
            openView(id)
          });
          movie.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
              openView(id)
            }
          });
          article.appendChild(movie)*/
    }

        /*p.appendChild(i)

        p.addEventListener('keypress', (event) => {
          if (event.keyCode === 13) {
            clickLike(id)
          }
        });
        div.appendChild(h2)
        div.appendChild(p)
        article.appendChild(div)*/
    return article
  }

  return {
    //createMediaList,
    getMediaCardDOM,
  }
}

