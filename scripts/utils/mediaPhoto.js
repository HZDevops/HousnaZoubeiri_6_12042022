export class Photo {
  constructor(media) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._image = media.image;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;
  }

  createPhoto () {
    return `
        <div class="photographer-media">
            <a href="" class="photographer-media-link">
                <img id=${this._id} src="../assets/photographers/${this.photographer}/${this._image}" alt="photo ${this._title}"></img>
            </a>
            <p class="photographer-media-title">${this._title}</p>
            <span class="photographer-media-likes">${this._likes}</span>
        </div>
    `;
  }
}
