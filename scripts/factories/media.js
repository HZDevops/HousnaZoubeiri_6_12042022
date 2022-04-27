import { MediaTypeFactory } from "./mediaTypeFactory.js"
/**
 * Create a photographer medias list
 * @param {Array} data
 * @param {String} photographerIdentity
 * @returns { Array }
 **/

export function mediaFactory (photographerIdentity, data) {
  const medias = data.media

  //Create a photograher card with object elements above
  function createMediaList() {
    const mediaById = medias.filter(
      (element) => element.photographerId == photographerIdentity.id
    );
    const mediaListArray = [];
    let mediasFiltered

    for (let i = 0; i < mediaById.length; i++) {
      const image = mediaById.filter((element) => element.image)[i];
      const video = mediaById.filter((element) => element.video)[i];
      mediaListArray.push(image);
      mediaListArray.push(video);
      mediasFiltered = mediaListArray.filter(
        (element) => element != undefined
      );
    }
    return mediasFiltered
  }

  function getMediaByType(medias) {
    console.log(medias)
    medias.forEach((media) => {
      if (media.video) {
        return new MediaTypeFactory (media, 'video')
      } else if (media.photo) {
        return new MediaTypeFactory(media, 'photo')
      }
    })
  }

  return {
    photographerIdentity,
    createMediaList,
    getMediaByType
  }
}

