import { Photo } from '../utils/mediaPhoto.js'
import { Video } from '../utils/mediaVideo.js'

export class MediaTypeFactory {
  constructor(media, type) {
    if (type === 'video') {
      return new Video(media)
    } else if (type === 'image') {
      return new Photo(media)
    } else {
      throw 'Unknown type format'
    }
  }
}
