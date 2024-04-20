import { applyBlackWhite } from "./DOM_connection.js";

function controlCard(arr) {
  const controlNum = arr.pop();

  const dubledNumbers = [];
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    dubledNumbers.push(arr[i] * 2);
    arr[i] = 0;
  }

  const result = [];

  for (let i = 0; i < dubledNumbers.length; i++) {
    if (dubledNumbers[i] >= 10) {
      const splited = dubledNumbers[i].toString().split("").map(Number);
      result.push(...splited);
    } else {
      result.push(dubledNumbers[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }

  const sum = result.reduce((acc, cur) => acc + cur);
  const remainds = 10 - (sum % 10);

  if (remainds === controlNum) {
    return true;
  } else {
    return false;
  }
}

const cardInput = document.querySelector(".input-field");
const checkBtn = document.querySelector(".btn");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const cardNumber = cardInput.value.split("").map(Number);
  if (controlCard(cardNumber)) {
    alert("Card is valid");
    cardInput.value = "";
    applyBlackWhite();
  } else {
    alert("Card isn't valid");
    cardInput.value = "";
    applyBlackWhite();
  }
});
