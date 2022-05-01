//Like or unlike media
export function likeMedia() {
  const likeMedia = document.querySelectorAll('#like');
  //const likeCounter = document.querySelector('#likeCounter');
  for (let i = 0; i < likeMedia.length; i++) {
    likeMedia[i].addEventListener('click', function () {
      const classList = likeMedia[i].classList;
      const liked = classList.toggle('liked');
      const oldValue = document.querySelectorAll('#like-number');
      if (liked) {
        const newValue = parseFloat(oldValue[i].innerText) + 1;
        oldValue[i].innerText = newValue;
        //likeCounter.innerHTML = updatedSumOfLike();
      } else {
        const newValue = parseFloat(oldValue[i].innerText) - 1;
        oldValue[i].innerText = newValue;
        //likeCounter.innerHTML = updatedSumOfLike();
      }
    });
  }
}
