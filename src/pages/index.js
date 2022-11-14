import photographerFactory from "../factories/photographerFactory";
import api from "../utils/api";
import photographer from "../pages/photographer";

async function displayData(photographers) {
    console.log(photographers);
    const photographersSection = document.querySelector(".photographer_section");

    console.log(photographersSection);
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        /* photographersSection.appendChild(userCardDOM); */
    });
};


async function init() {
    // Récupère les datas des photographes
    /* const { photographers } = await getPhotographers(); */
    const { photographers } = await api.getPhotographers();
    /* const {photographer} = await api.getPhotographer(); */
    /* const {medias} = await api.getMedias(); */
    displayData(photographers);
};

init();
