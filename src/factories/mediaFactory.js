import Media from "../class/Media";

function mediaFactory(data){
    const media = new Media(data);
    const photographBody = document.querySelector('.photograph-body');

    function medias(){
        const media_article =`
        <div class="media_article">
            <a class="media_link">
                <div class="media_mmh">
                    
                </div>
                <div>
                    <p class="media_name">
                    
                    </p>
                    <p class="media_likes">
                    
                    <span class="media_icon">
                    
                    </span>
                    </p>
                </div>
            </a>
        </div>
    `;
    }

    return {medias};
}

export default mediaFactory;

/* class MediaFactory {
    constructor(data, type) {
        if (type === 'image') {
            return new Picture(data);
        } else if (type === 'video') {
            return new Video(data);
        } else {
            throw 'Format non reconnu';
        }
    }
} */