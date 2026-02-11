// Gestion musique (Play / Pause)

const audio = document.getElementById("musiqueFond");
const bouton = document.getElementById("btnMusique");

let enLecture = false;

bouton.addEventListener("click", () => {

    if (!enLecture) {
        audio.play();
        bouton.textContent = "⏸ Pause la musique";
        enLecture = true;
    } else {
        audio.pause();
        bouton.textContent = "▶ Lancer la musique";
        enLecture = false;
    }

});


function alerteBob() {
    alert("Merci maintenant tu fais partie de la team bob !");
}
