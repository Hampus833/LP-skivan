"use strict";

let ljudKallor = [
    'media/mp3files/1800Chopin-Nocturne op.9 No.2.mp3',
    'media/mp3files/1930.mp3',
    'media/mp3files/1940Nat King Cole-L-O-V-E.mp3',
    'media/mp3files/1960The Beatles-Come Together.mp3',
    'media/mp3files/1970Bee Gees-Night Fever.mp3',
    'media/mp3files/1980Madonna-Material Girl.mp3',
    'media/mp3files/1990Nirvana-Come As You Are.mp3',
    'media/mp3files/2000Rihanna-Disturbia.mp3',
    'media/mp3files/2010Avicii-Levels.mp3',
    'media/mp3files/2020The Weeknd-Blinding Lights.mp3',
    // Lägg till fler vid behov
];

let play_button = document.querySelectorAll(".play");
console.log(play_button);

let pause_button = document.querySelectorAll(".paused");
console.log(pause_button);

const sound = new Audio();

let current_audio_file = null;
let current_playback_position = 0;

for (let i = 0; i < ljudKallor.length; i++) {

    // lägger till attributet "song" på alla play knappar med värdet låten i index[i]från ljudKallor
    play_button[i].setAttribute("song", ljudKallor[i]);
    play_button[i].addEventListener("click", play_song);
}

function play_song(event) {

    //hämtar värdet från knappen man tryckte på 
    const audio_file = event.target.getAttribute("song");

    //if sats för att hålla koll på vilken låt som spelas
    if (current_audio_file !== audio_file) {
        sound.src = audio_file;
        current_audio_file = audio_file;
        current_playback_position = 0;
    }

    //uppdaterar värdet i current_playback_position med den aktuella uppspelningstiden
    sound.currentTime = current_playback_position;
    console.log(sound.currentTime);
    sound.play();
}

for (let i = 0; i < ljudKallor.length; i++) {

    //loopar igenom nodelisten med pausknappar och lägger till en eventlistener på alla
    pause_button[i].addEventListener("click", pause_song);
}

function pause_song() {

    /*kollar först om ljudet inte är pausat och uppdaterar sedan sound.currentTime med uppspelningstiden av låten 
    då man trycker på paus. På så sätt kan man hålla koll på hur mycket av låten som spelats och den startar inte om varje
    gång man trycker på play*/

    if (!sound.paused) {
        current_playback_position = sound.currentTime;
        sound.pause();
    }
}

/*funktionen för att stoppa ljudet när man scrollar (snodde den direkt från mp3.js);

window.addEventListener("scroll", function () {

    const current_position = window.scrollY;
    const view_height = window.innerHeight;
    const trigger_point = 100 * (current_position / view_height);

    if (current_position >= trigger_point) {
        sound.pause();
    }
})*/
