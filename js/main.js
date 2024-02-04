const keys = Array.from(document.querySelectorAll(".keys__item"));

function playSound(e) {
  const audio = document.querySelector(
    `.keys__audio-item[data-key="${e.code}"]`
  );
  try {
    audio.currentTime = 0;
    audio.play();
    keys.map((item) => {
      if (item.dataset.key == e.code) {
        item.classList.add("keys__kilcked");
      }
    });
  } catch (err) {
    console.log(err);
  }
}

function deleteTrancition(e) {
  if (e.target.classList.contains("keys__item")) {
    setTimeout(() => {
      e.target.classList.remove("keys__kilcked");
    }, 10);
  }
}

window.addEventListener("transitionend", deleteTrancition);
window.addEventListener("keypress", playSound);
