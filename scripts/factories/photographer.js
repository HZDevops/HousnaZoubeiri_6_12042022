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
                        <a aria-label="${name}" href="photographer.html?id=${this.id}" id="${this.id}" class="card-link">
                            <img class="card-image" src="${picture}" alt="photo de ${name}">
                            <h2 aria='hidden' class="card-name">${name}</h2>
                        </a>
                        <p class="card-location">${this.city}, ${this.country}</p>
                        <p class="card-tagline">${this.tagline}</p>
                        <p class="card-price">${this.price}&euro;/jour</p>`;
      article.innerHTML = photographerCard;
      return article;
    },
  }
}
