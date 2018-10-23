const alphabet = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

document.addEventListener('keydown', onKeyDownHandler, true);

let index = 0;
const bodyPress = document.getElementById('body');

function init() {
  {
    
  }
}
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  init()
  const key = e.key;

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

