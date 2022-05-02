//Update like counter of the photographer page
export function updateLikesNumber() {
  const likes = document.querySelectorAll("#like-number")
  const likesArray = Array.from(likes, (e) => parseInt(e.innerText))
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const totalLikes = likesArray.reduce(reducer)
  return totalLikes
}

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
        const newValue = parseInt(oldValue[i].innerText) + 1
        oldValue[i].innerText = newValue
        oldValue[i].style.color ='#901C1C'
        oldValue[i].style.fontSize = '1.2rem'
        likeCounter.textContent = updateLikesNumber()
      } else {
        const newValue = parseInt(oldValue[i].innerText) - 1
        oldValue[i].innerText = newValue
        oldValue[i].style.color = 'black';
        oldValue[i].style.fontSize = '0.9rem';
        likeCounter.textContent = updateLikesNumber()
      }
    });
  }
}

