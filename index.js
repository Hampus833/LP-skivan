"use strict";

let container = document.querySelectorAll(".background");
let backgroundImages = [];

for (let i = 1870; i <= 2020; i += 10) {
    if (i >= 1920 && i <= 2020 || i === 1870) {
        backgroundImages.push(`url(media/bakgrundsbilder/${i}bg.jpeg)`);
        console.log(backgroundImages);
    }
}

for (let i = 0; i < container.length; i++) {
    container[i].style.backgroundImage = backgroundImages[i];
    container[i].style.backgroundSize = "cover";
}
