/**
 * Created by sophia on 2/23/17.
 */
document.addEventListener("DOMContentLoaded", function() {
  function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //if invalid key is selected, return null
    audio.currentTime = 0; //rewinds sound immediately to allow for repetition
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition() {
    // if (e.propertyName !== 'transform') return; //only need to pick the longest event
    this.classList.remove('playing'); //'this' refers to the element being called, in this case 'key' [line 21]
  }

  window.addEventListener('keydown', playAudio);

  const keys = document.querySelectorAll('.key');
//must loop through all of the elements, cannot listen to a whole list
  keys.forEach(function (key) {
    key.addEventListener('transitionend', removeTransition);
  });
});