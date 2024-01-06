"use strict";

let container = document.querySelectorAll(".background");
let backgroundImages = [];

for (let i = 1870; i <= 2020; i += 10) {
    if (i >= 1920 && i <= 2020 || i === 1870) {
        if (i === 1950 || i === 1920) { continue; }
        backgroundImages.push(`url(media/bakgrundsbilder/${i}bg.jpeg)`);
        console.log(backgroundImages);
    }
}

for (let i = 0; i < container.length; i++) {
    container[i].style.backgroundImage = backgroundImages[i];
    container[i].style.backgroundSize = "100% 100%";
}

// ARTISTBAKGRUNDER
let containerArtist = document.querySelectorAll(".background_artist");
let backgroundImagesArtist = [];

for (let i = 1870; i <= 2020; i += 10) {
    if (i >= 1920 && i <= 2020 || i === 1870) {
        if (i === 1950 || i === 1920) { continue; }
        backgroundImagesArtist.push(`url(media/bakgrundsbilder/${i}bg.jpeg)`);
    }
}

for (let i = 0; i < containerArtist.length; i++) {
    containerArtist[i].style.backgroundImage = backgroundImagesArtist[i];
    containerArtist[i].style.backgroundSize = "100% 100%";
}
