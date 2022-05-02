//import { mediaFactory} from '../factories/media.js'

//Calculate the number of likes by photographer
/*export function totalLikesPhotographer(medias, photographerId) {
  const totalLikeArray = [];

  medias.forEach((media) => {
    const mediaModel = mediaFactory(media, photographerId);
    const mediaLikeNumber = mediaModel.getLikeByMedia();
    totalLikeArray.push(mediaLikeNumber);
  });

  const reducer = (accumulator, curr) => accumulator + curr;
  const likesNumber = totalLikeArray.reduce(reducer);
  return likesNumber;
}*/

//Like or unlike media and update the total like counter of the photographer page
export function likeMedia(medias, photographerId) {
  const likeMedia = document.querySelectorAll('#like-media');
  const likeCounter = document.querySelector('#total-like-number');
  
  for (let i = 0; i < likeMedia.length; i++) {
    likeMedia[i].addEventListener('click', function () {
      const classList = likeMedia[i].classList;
      const liked = classList.toggle('liked');
      const oldValue = document.querySelectorAll('#like-number');
      if (liked) {
        const newValue = parseFloat(oldValue[i].innerText) + 1
        oldValue[i].innerText = newValue;
        likeCounter.innerHTML = totalLikesPhotographer(medias, photographerId)
      } else {
        const newValue = parseFloat(oldValue[i].innerText) - 1
        oldValue[i].innerText = newValue
        likeCounter.innerHTML = totalLikesPhotographer(medias, photographerId)
      }
    });
  }
}

