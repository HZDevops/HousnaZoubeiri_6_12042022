import { getData } from '../utils/apiData.js'
import { photographerFactory } from '../factories/photographer.js'

/**
 * Get photographers data
 * @returns {Array}
 **/
export async function getPhotographers() {
    const apiData = await getData()
    const photographers = apiData.photographers
    return photographers
}

/**
 * Diplay photographer cards on homepage
 * @param {Array} photographers
 **/
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section")
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
    });
}

async function init() {
  const photographers  = await getPhotographers()
  displayData(photographers)
}

init()

