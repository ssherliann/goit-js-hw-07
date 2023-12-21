const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`; 
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}