/**
 * Create a photographer object and a photographer card
 * @param {Object} data
 * @returns {HTMLElement}
 **/
export function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  //Display photographer details
  function getUserInformation() {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('photograph-header-left');

    const photographerInfo = `<h1 class='card-name'>${name}</h1>
        <p class='card-location'>${city}, ${country}</p>
        <p class="card-tagline">${tagline}</p>`;
    infoContainer.innerHTML = photographerInfo;

    return infoContainer;
  }

  //Display Photographer ID picture
  function getUserPicture() {
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photograph-header-right');

    const photographerPicture = `<img class="card-image" src="${picture}" alt="photo de ${name}">`;
    photoContainer.innerHTML = photographerPicture;

    return photoContainer;
  }

  //Create a photographer card 
  function getUserCardDOM() {
    const article = document.createElement('article');
    article.classList.add('card');

    const photographerCard = `
                        <a aria-label="${name}" href="photographer.html?id=${id}" id="${id}" class="card-link">
                            <img class="card-image" src="${picture}" alt="photo de ${name}">
                            <h2 aria='hidden' class="card-name">${name}</h2>
                        </a>
                        <p class="card-location">${city}, ${country}</p>
                        <p class="card-tagline">${tagline}</p>
                        <p class="card-price">${price}&euro;/jour</p>`;
    article.innerHTML = photographerCard;
    return article;
  }
  
  return {
    getUserInformation,
    getUserCardDOM,
    getUserPicture
  }
}
