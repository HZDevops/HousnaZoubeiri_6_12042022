export function mediaFactory (data, photographerId) {

  const { id, title, image, video, likes, date, price } = data

  //Create photographer media list
  function getMediaCardDOM(medias) {

    const article = document.createElement('article')
    const divMedia = document.createElement('div')
    //const h2 = document.createElement('h2')

    article.classList.add('media-list')
    divMedia.classList.add('photographer-media')

    //h2.textContent = title

        if (image) {
          const imageMedia = `
              <a href="#" class="photographer-media-link">
                <img class="media-image" id=${id} src="../assets/photographers/${photographerId}/${image}" alt="photo ${title}"></img>
              </a>
              <p class="photographer-media-title">${title}</p>
              <span class="photographer-media-likes">${likes}</span>
            `
          divMedia.innerHTML = imageMedia
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
          article.appendChild(divMedia)
        } else if (video) {

          const videoMedia = `
            <a href="" class="photographer-media-link">
              <iframe
                height="600"
                width="800"
                src="../assets/photographers/${photographerId}/${video}"
              ></iframe>
            </a>
            <p class="photographer-media-title">${title}</p>
            <span class="photographer-media-likes">${likes}</span>
            `
          divMedia.innerHTML = videoMedia
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
          article.appendChild(divMedia)
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
        article.appendChild(divMedia);
        return article
  }

  return {
    //createMediaList,
    getMediaCardDOM,
  }
}

