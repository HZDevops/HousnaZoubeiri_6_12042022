export class Video {
  constructor(media) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._video = media.video;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;
  }

  createVideo() {
    return `
        <div class="photographer-media">
            <a href="" class="photographer-media-link">
                <iframe
                   height="600"
                   width="800"
                   src=${this._video}
               ></iframe>
            </a>
            <p class="photographer-media-title">${this._title}</p>
            <span class="photographer-media-likes">${this._likes}</span>
        </div>
    `
  }
}
