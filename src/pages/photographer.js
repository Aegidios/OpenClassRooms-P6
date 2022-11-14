import photographerFactory from "../factories/photographerFactory";
import mediaFactory from "../factories/mediaFactory";
import api from "../utils/api";


async function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector('.photograph-header');
    const photographerModel = photographerFactory(photographer);
    photographerModel.user();
};

async function displayDataMedias(medias){
    const mediasSection = document.querySelector('.photograph-body');
    const mediaModel = mediaFactory(medias);
    mediaModel.medias();
    /* console.log(medias); */
    /* medias.forEach((media)=>{

        const mediasSection = document.querySelector('.photograph-body');
        const Params = (new URL(document.location).searchParams);
        const Id = Number(Params.get('id'));

        if(media.photographerId === Id){
            console.log(media);
            const photographerModel = mediasFactory(media);
            const userCardDOM = photographerModel.medias();
        }

    }); */

};

/* function test(){
    const abc = {
        title : "gilles",
        text : "test"
    };
    console.log(abc);
    const {title,text,bug} = abc;
    console.log(title,text,bug);
} */


async function init() {
    // Récupère les datas des photographes
    /* const { photographers } = await api.getPhotographers(); */
    const  photographer  = await api.getPhotographer();
    const medias = await api.getMedias();
    /* console.log(medias); */
    console.log(photographer);
    displayDataPhotographer(photographer);
    displayDataMedias(medias);
};

init();