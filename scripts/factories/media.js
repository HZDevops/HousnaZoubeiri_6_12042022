export function mediaFactory (data, photographerId) {

  const { id, title, image, video, likes, date, price } = data

  const totalLikes = 0

  //Create photographer media cards
  function getMediaCardDOM() {

    const article = document.createElement('article')
       
    article.classList.add('media-card')
     
    if (image) {
      const imageMedia = `
        <a href="#" aria-label='${title}, cliquez pour agrandir' class="photographer-media-link">
          <img class="media" id=${id} src="../assets/photographers/${photographerId}/${image}" alt="photo ${title}"></img>
        </a>
        <div class="media-info">
          <p class="media-info-title">${title}</p>
          <button class="media-info-like" aria-label="likes">
            <span class="like-number">${likes}</span>
            <i class="fas fa-heart"></i>
          </button>
        </div>
      `;
      article.innerHTML = imageMedia
    } else if (video) {
      const videoMedia = `
        <a href="#" aria-label="${title}, cliquez pour visionner la vidéo" class="photographer-media-link">
          <video id=${id} class="media" controls="controls">
            <source src="../assets/photographers/${photographerId}/${video}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
        </a>
        <div class="media-info">
          <p class="media-info-title">${title}</p>
          <button class="media-info-like" aria-label="likes">
            <span class="like-number">${likes}</span>
            <i class="fas fa-heart"></i>
          </button>
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

  function getMediaDOM (medias) {
    let mediaNameArray = []
    let mediaHtmlArray = []
   
    let mediaDOM = Array.from(document.getElementsByClassName('media'))
    for (let i = 0; i < mediaDOM.length; i++) {
      mediaHtmlArray.push(mediaDOM[i].outerHTML);
    }

    medias.forEach((media) => {
      mediaNameArray.push(media.title)
    })
    console.log(mediaHtmlArray);
    return { mediaHtmlArray, mediaNameArray }
  }
    
      /*if (image){
        sourceMedia = `../assets/photographers/${photographerId}/${image}`
        nameMedia = title
      }
      else if (video){
        sourceMedia = `../assets/photographers/${photographerId}/${video}`
        nameMedia = title
      }
      //console.log(sourceMedia)
      //console.log(nameMedia)
      //return {sourceMedia, nameMedia}*/
  

  return {
    getMediaCardDOM,
    getLikeDOM,
    getMediaDOM
  }
}