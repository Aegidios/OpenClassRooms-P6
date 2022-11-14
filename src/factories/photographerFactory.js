import Photographer from "../class/Photographer";
import Media from "../class/Media";

function photographerFactory(data) {
    /* console.log(data); */
    /* const { name, city, country, tagline, price, portrait } = data; */
    const photographer = new Photographer(data);

    /* const picture = `assets/photographers/${portrait}`; */

    function getUserCardDOM() {
        /* const article = document.createElement( 'article' );
        const link = document.createElement('a');
        link.setAttribute('href','/public/index.html?id='+photographer.getId());
        link.classList.add('link');
        const img = document.createElement( 'img' );
        img.setAttribute("src", photographer.getPortrait());
        img.setAttribute('alt', photographer.getName());
        const name = document.createElement( 'h2' );
        name.classList.add('name');
        name.textContent = photographer.getName();
        const location = document.createElement('p');
        location.classList.add('city');
        location.textContent = photographer.getCity()+ ", "+ photographer.getCountry();
        const tagline = document.createElement('p');
        tagline.classList.add('tagline');
        tagline.textContent = photographer.getTagline();
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = photographer.getPrice()+ '€/Jour';
  
        link.appendChild(img);
        link.appendChild(name);
        article.appendChild(link);
        article.appendChild(location);
        article.appendChild(tagline);
        article.appendChild(price); */
        /* return (article); */

        /* let section = document.querySelector('.photographer_section');
        section.insertAdjacentHTML('afterbegin',
        '<article></article>')
        .insertAdjacentHTML('afterbegin','<a href="/public/index.html?='+photographer.getId()+'"></a>')
        .insertAdjacentHTML('afterbegin','<img src="'+photographer.getPortrait()+'alt="'+photographer.getName()+'"></img>')
        .insertAdjacentHTML('afterend','<h2 class="name">'+photographer.getName()+'</h2>')
        .insertAdjacentHTML('afterend','<p class="location">'+photographer.getCity()+', '+photographer.getCountry()+'</p>')
        .insertAdjacentHTML('afterend','<p class="tagline">'+photographer.getTagline()+'</p>')
        .insertAdjacentHTML('afterend','<p class="price">'+photographer.getPrice()+' €/Jour'+'</p>');
        */

        /* let section = document.querySelector('.photographer_section');
        let article = '<article></article>';
        let link = '<a href="/public/index.html?='+photographer.getId()+'"></a>';
        let img = '<img src="'+photographer.getPortrait()+'alt="'+photographer.getName()+'"></img>';
        let name = '<h2 class="name">'+photographer.getName()+'</h2>';
        let location = '<p class="location">'+photographer.getCity()+', '+photographer.getCountry()+'</p>';
        let tagline = '<p class="tagline">'+photographer.getTagline()+'</p>';
        let price = '<p class="price">'+photographer.getPrice()+' €/Jour'+'</p>';

        section.insertAdjacentHTML('afterbegin', article);
        article.insertAdjacentHTML('afterbegin', link);
        link.insertAdjacentHTML('afterbegin', img);
        img.insertAdjacentHTML('afterend', name);
        name.insertAdjacentHTML('afterend', location);
        location.insertAdjacentHTML('afterend', tagline);
        tagline.insertAdjacentHTML('afterend', price); */
        
        /* const gilles = "je m'appelle Gilles";

        const message = ()=>{
            alert ('Salut tout le monde');
        }

        const message2 = (params)=>{
            return `j'aime le ${params}`;
        }
 */
        {/* <p onclick=${message()}</p>> */}
        /* const test = `
            <div>
                <p>
                
                    J'aime le React
                    ${gilles} 
                    ${message2(`php`)} , 
                    ${message2(`vueJS`)}
                </p>
            </div>
        `;
        const tag = document.getElementById('main');
        tag.insertAdjacentHTML('afterbegin',test); */

        const photographer_article =
        `
            <article>
                <a href="/public/photographer.html?id=${photographer.getId()}">
                    <img src="${photographer.getPortrait()}" alt="${photographer.getName()}">
                    <h2 class="name">
                        ${photographer.getName()}
                    </h2>
                    <p class="location">
                        ${photographer.getCity()} , ${photographer.getCountry()}
                    </p>
                    <p class="tagline">
                        ${photographer.getTagline()}
                    </p>
                    <p class="price">
                        ${photographer.getPrice()}€/Jour
                    </p>
                </a>
            </article>
        `;

        const section = document.querySelector('.photographer_section');
        section.insertAdjacentHTML('afterbegin', photographer_article);

        /* return (section); */
    }

    function user(){

        const photographer_header = `
            <div class="photographer_header">
                <div>
                    <h1>
                        ${photographer.getName()}
                    </h1>
                    <p>
                        ${photographer.getCity()}, ${photographer.getCountry()}
                    </p>
                    <p>
                        ${photographer.getTagline()}
                    </p>
                </div>
            </div>
        `;

        const photographer_avatar = `
            <div>
                <img src=${photographer.getPortrait()} alt=${photographer.getName()} class="photographerPortrait" >
            </div>
        `;

        const photographHeader = document.querySelector('.photograph-header');
        photographHeader.insertAdjacentHTML('afterbegin', photographer_header);
        photographHeader.insertAdjacentHTML('beforeend', photographer_avatar);
    }

    /* return { name, city, country, picture, getUserCardDOM } */
    return {getUserCardDOM,user};
}


export default photographerFactory;