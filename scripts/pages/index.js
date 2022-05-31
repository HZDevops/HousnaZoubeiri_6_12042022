import { getData } from '../utils/getData.js'
import { photographerFactory } from '../factories/photographer.js'

//Get photographers data
export async function getPhotographers() {
    const apiData = await getData()
    const photographers = apiData.photographers
    return photographers
}

//Display photographer cards on homepage
function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section")
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
    });
}

//Display homepage
async function init() {
  const photographers  = await getPhotographers()
  displayData(photographers)
}

init()

