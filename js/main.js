const keys = document.querySelectorAll(".keys__item");

function playSound(e) {
  const audio = document.querySelector(
    `.keys__audio-item[data-key="${e.code}"]`
  );
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    Array.from(keys).map((item) => {
      if (item.dataset.key == e.code) {
        item.classList.add("keys__kilcked");
      }
    });
  } else {
    return;
  }
}

function deleteTrancition(e) {
  Array.from(keys).map((item) => {
    if (item.classList[1] == 'keys__kilcked') {
      item.classList.remove("keys__kilcked");
    }
  });
}


window.addEventListener('transitionend', deleteTrancition)
window.addEventListener("keydown", playSound);
