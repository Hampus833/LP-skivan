document.addEventListener('DOMContentLoaded', function () {

// Array av ljudkällor (ersätt dessa med dina egna filvägar)
const ljudKallor = [
        'media/mp3files/1800Chopin-Nocturne op.9 No.2.mp3',
        'media/mp3files/1930Ella Fitzgerald-Ill Be Seeing You.mp3',
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

// Hämta ljudspelar- och källa-elementen
const ljudSpelare = document.getElementById('audioPlayer');
const ljudKalla = document.getElementById('audioSource');

// Index för att hålla koll på aktuell låt
let aktuelltLjudIndex = 0;

// Funktion för att ändra ljudkällan och spela nästa låt
function bytLjud() {
    aktuelltLjudIndex = (aktuelltLjudIndex + 1) % ljudKallor.length; // Loopa till första låten efter den sista
    ljudKalla.src = ljudKallor[aktuelltLjudIndex];
    ljudSpelare.load(); // Ladda om ljudspelaren
    ljudSpelare.play(); // Spela den nya låten
}

// Händelselyssnare för rullningshändelser
window.addEventListener('scroll', function () {
    // Byt låt varje gång rullning sker med 100vh
    const rullningsPosition = window.scrollY;
    const vyHojd = window.innerHeight;
    const utlosningsPunkt = 100 * (rullningsPosition / vyHojd);

    if (rullningsPosition >= utlosningsPunkt) {
        bytLjud();
    }
    })
})
