// Colection
const inputRef = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

const getRandomColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = (amount) => {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
  numbers.push(i);
  };
  const elements = numbers.map((item) => {
    const size = 30 + item * 10;
    const boxRef = document.createElement("div");
    boxRef.style.width = `${size}px`;
    boxRef.style.height = `${size}px`;
    boxRef.style.backgroundColor = getRandomColor();
    boxRef.style.margin = "5px";
    boxRef.style.display = "inline-block";
    return boxRef;
  });

  boxesRef.append(...elements);
}

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
}

renderBtn.addEventListener("click", () => {
  destroyBoxes();
  const amount = Number(inputRef.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
