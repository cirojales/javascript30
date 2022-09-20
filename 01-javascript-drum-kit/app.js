function playSound(event) {
  const sound = document.querySelector(`audio[data-key-code="${event.code}"]`);
  if (event.repeat || !sound) return;
  sound.currentTime = 0;
  sound.play();
  const key = document.querySelector(`.key[data-key-code="${event.code}"]`);
  key.classList.add("playing");
  setTimeout(() => key.classList.remove("playing"), 70);
}

window.addEventListener("keydown", playSound);