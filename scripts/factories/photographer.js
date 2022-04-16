/**
 * Create a photographer object and a photographer card
 * @param {object} data
 * @returns {HTMLElement}
 **/
export function photographerFactory(data) {
  return {
    name: data.name,
    id: data.id,
    city: data.city,
    country: data.country,
    tagline: data.tagline,
    price: data.price,
    portrait: data.portrait,

    //Create a photograher card with object elements above
    getUserCardDOM: function () {
      const { name, portrait } = data;
      const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

      const article = document.createElement('article');
      article.classList.add('card');

      const photographerCard = `
                        <a id="${this.id}" class="card__general-link" href="" aria-label='${name}'>
                            <img class="card__image" src="${picture}" alt="photo de ${name}">
                            <h2 aria='hidden' class="card__name">${name}</h2>
                        </a>
                        <p class="card__location">${this.city}, ${this.country}</p>
                        <p class="card__tagline">${this.tagline}</p>
                        <p class="card__price">${this.price}&euro;/jour</p>`
      article.innerHTML = photographerCard;
      return article;
    },
  }
}
