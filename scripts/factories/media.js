export function mediaFactory (data, photographerId) {

  const { id, title, image, video, likes, date, price } = data

  const totalLikes = 0

  //Create photographer media cards
  function getMediaCardDOM(medias) {

    const article = document.createElement('article')
       
    article.classList.add('media-card')
     
    if (image) {
      const imageMedia = `
        <a href="#" title='${title}, cliquez pour agrandir' class="photographer-media-link">
          <img class="media-image" id=${id} src="../assets/photographers/${photographerId}/${image}" alt="photo ${title}"></img>
        </a>
        <div class="media-info">
          <p class="media-info-title">${title}</p>
          <div class="media-info-like">
            <span class="like-number">${likes}</span>
            <i aria-label="likes" class="fas fa-heart"></i>
          </div>
        </div>
      `;
      article.innerHTML = imageMedia
    } else if (video) {
      const videoMedia = `
        <a href="#" title="${title}, cliquez pour visionner la vidéo" class="photographer-media-link">
          <video id=${id} class="media-image" controls="controls">
            <source src="../assets/photographers/${photographerId}/${video}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
        </a>
        <div class="media-info">
          <p class="media-info-title">${title}</p>
          <div class="media-info-like">
            <span class="like-number">${likes}</span>
            <i aria-label="likes" class="fas fa-heart"></i>
          </div>
        </div>
      `;
      article.innerHTML = videoMedia
    }
    return article
  }

  function getLikeDOM(medias) {
    let likesNumber= 0

    medias.forEach((media) => {
      likesNumber += parseInt(media.likes)
    })
    
    return likesNumber
  }

  return {
    getMediaCardDOM,
    getLikeDOM
  }
}

