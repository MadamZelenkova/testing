function showColor(selector) {
  const image = document.querySelector(selector);
  image.style.filter = "none";
}

export function applyBlackWhite() {
  const allImages = document.getElementsByTagName("img");
  Array.from(allImages).forEach((element) => {
    element.style.filter = "grayscale(100%)";
  });
}

function chooseCard(value) {
  if (value[0] === 4) {
    showColor(".visa");
  } else if (value[0] === 5) {
    showColor(".mcd");
  } else if (value[0] === 6) {
    showColor(".discover");
  } else if (value[0] === 2) {
    showColor(".pease");
  } else if (value[0] === 3) {
    if (value[1] === 5) {
      showColor(".jcb");
    } else if (value[1] === 6) {
      showColor(".dinners");
    } else {
      showColor(".am_ex");
    }
  } else {
    return;
  }
}

const cardInput = document.querySelector(".input-field");

cardInput.addEventListener("input", (e) => {
  e.preventDefault();
  const value = cardInput.value.split("").map(Number);

  if (value.length > 1) {
    chooseCard(value);
  } else {
    applyBlackWhite();
  }
});
