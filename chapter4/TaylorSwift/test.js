document.addEventListener("DOMContentLoaded", function() {
    let audioPlayer = document.getElementById("audioPlayer");
    let playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function() {
        let audioSource = "sanger/our song.mp3";

        // Logg filstien for feilsøking
        console.log("Audio source:", audioSource);

        audioPlayer.src = audioSource;

        // Legg til en event-lytter for å logge hendelser
        audioPlayer.addEventListener("error", function(e) {
            console.error("Audio error:", e);
        });

        // Prøv å spille av lyden
        audioPlayer.play().then(function() {
            console.log("Audio playback started successfully.");
        }).catch(function(error) {
            console.error("Audio playback error:", error);
        });
    });
});
