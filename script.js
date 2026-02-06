const galleryBtn = document.getElementById("galleryBtn");
const home = document.getElementById("home");
const prank = document.getElementById("prank");
const audio = document.getElementById("prankAudio");

// Hide popup automatically (backup)
setTimeout(() => {
  const popup = document.getElementById("volumePopup");
  popup.style.display = "none";
}, 4000);

galleryBtn.addEventListener("click", () => {
  home.classList.add("hidden");
  prank.classList.remove("hidden");

  audio.volume = 1;
  audio.play().catch(()=>{});
});

// Mobile autoplay fix
document.addEventListener("click", () => {
  audio.play().catch(()=>{});
}, { once:true });
