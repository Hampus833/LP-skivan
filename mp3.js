

// Array av ljudkällor (ersätt dessa med dina egna filvägar)
const ljudKallor = [
    'LP-songs/1800.mp3',
    'LP-songs/30s.mp3',
    'LP-songs/80s.mp3',
    'LP-songs/90s.mp3',
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
});
