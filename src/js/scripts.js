document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu_icon");
  const navMenu = document.getElementById("nav-menu");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
function toggleAudio() {
  const audio = document.getElementById("audio");
  const icon = document.getElementById("audio-icon");

  if (audio.paused) {
    audio.play();
    icon.textContent = "⏸️"; // Change icon to Pause
  } else {
    audio.pause();
    icon.textContent = "🔊"; // Change icon back to Play
  }
}



