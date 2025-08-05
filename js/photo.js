const mainContainer = document.querySelector(".image-container");
const leftButton = document.getElementById("goleft");
const rightButton = document.getElementById("goright");

photo_list = [
    {
        location:"images/picture_page/comedyhouse.JPG",
        caption:"Fez plays at the Spice Rack (2023)"
    },
    {
        location:"images/picture_page/familyPhoto.JPG",
        caption:"Fez family photo (2023)"
    },
    {
        location:"images/picture_page/halloween.JPG",
        caption:"Fez does the spooky (2023)"
    },
    {
        location:"images/picture_page/panorama.JPG",
        caption:"Fez serenades Milheim, PA (2024)"
    },
    {
        location: "images/picture_page/fred.JPG",
        caption: "Fred meets Weezer (Date unknown)"
    },
    {
        location: "images/picture_page/wrestle.JPG",
        caption: "WWFez wrestlers invade pool party (2024)"
    },
    {
        location: "images/picture_page/fezSurprised.JPG",
        caption: "Fez hears about McDonald's $5 menu (2024)"
    },
    {
        location: "images/picture_page/BrotherFelterbush.JPG",
        caption: "Brother Felterbush spreads Fez to his disciples (1993)"
    },
    {
        location: "images/picture_page/fezrobes.jpg",
        caption: "Fez club meeting (non-nefarious) (2024)"
    },
    {
        location: "images/picture_page/fezBlurry.JPG",
        caption: "Fez guitar player reaches state of blur (2023)"
    },
    {
        location: "images/picture_page/horror.jpg",
        caption: "Family photo in suspiciously red hallway (2024)"
    },
    {
        location: "images/picture_page/xavi_scream_big.png",
        caption: "Fez drummer after being told to quiet down (2024)"
    },
    {
        location: "images/picture_page/bassOrigin.JPG",
        caption: "Fez bass player origin story (c. 2009)"
    },
    {
        location: "images/picture_page/Splingo.JPG",
        caption: "Famous Fez member AI-Generated Splingo (2023)"
    },
    {
        location: "images/picture_page/fezRage.jpg",
        caption: "Fez computer after an unfruitful recording session (2024)"
    },
    {
        location: "images/picture_page/fezBass.jpg",
        caption: "Fez bass player plays mind melting lick (2023)"
    },
    {
        location: "images/picture_page/clickbait.png",
        caption: "Fez learns about clickbait (2024)"
    }
];

let index = 0;

leftButton.addEventListener("click", () => swipePhoto(-1));
rightButton.addEventListener("click", () => swipePhoto(1));

function swipePhoto(dir) {
    index = index + dir;

    if (index >= photo_list.length){
        index = 0;
    }

    if (index < 0){
        index = photo_list.length - 1;
    }

    displayPhoto(index);
}

function displayPhoto(new_index){
    mainContainer.innerHTML = "";

    const link = document.createElement("a");
    link.target = "_blank";
    link.href = photo_list[new_index].location;

    if(photo_list[new_index].location.endsWith("clickbait.png")){
        link.href = "download.html";
    }

    const image_wrapper = document.createElement("div");
    image_wrapper.classList.add("image-wrapper");

    const image = document.createElement("img");
    image.src = photo_list[new_index].location;
    image.alt = photo_list[new_index].caption;
    image.classList.add("display-image");

    const captionDiv = document.createElement("div");
    captionDiv.innerText = photo_list[new_index].caption;
    captionDiv.classList.add("caption");

    link.appendChild(image);
    image_wrapper.appendChild(link);
    mainContainer.appendChild(image_wrapper);
    mainContainer.appendChild(captionDiv);
}

window.addEventListener("DOMContentLoaded", () => displayPhoto(index));

