async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const response = await fetch("/public/data/photographers.json", {method:"GET"});
    const photographers = await response.json();
    // et bien retourner le tableau photographers seulement une fois
    console.log(photographers);
    return photographers;
}

function getId(){
  const Params = new URL(document.location).searchParams;
  const Id = Number(Params.get('id'));
  return Id;
}

async function getPhotographer(){
  const response = await fetch("/public/data/photographers.json",{method:"GET"});
  const data = await response.json();
  const photographers = data.photographers;
  const Id = getId();
  /* const photographersSection = document.querySelector('.photographer-header'); */
  let match = {};
  console.log(photographers);
  photographers.forEach((photographer) => {
    if(photographer.id === Id){
      /* const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.user(); */
      match = photographer;
    }
  });

  return match;

  /* Object.keys(photographers).forEach((photographer)=>{
    if(photographer.id === Id){
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.user();
      photographersSection.append(userCardDOM);  
      console.log(photographer) ;
    }
  }); */
  
  /* return photographers; */

}

/* if (Object.keys(players).length > 0) {
  for (const key in players) {
    html += '<div>' + players[key].status + '</div>';
  }
} */

async function getMedias(){
  const response = await fetch("/public/data/photographers.json",{method:"GET"});
  const data = await response.json();
  const Id = getId();
  let medias = data.media;
  console.log(medias);
  let match = {};
  medias.forEach((media)=>{
    if(medias.photographerId === Id){
      match = media;
    }
  });

  return match;
}

const api = {
  getPhotographers,
  getPhotographer,
  getMedias,
};

export default api;