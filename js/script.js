// Slider
const galleryRef = document.querySelector(".gallery");
const itemRef = document.querySelectorAll(".gallery li");
let currentIndex = 0;

function updateTransform() {
  galleryRef.style.transform = `translateX(${-currentIndex * 320}px)`;
  galleryRef.style.transition = "transform 0.8s ease";
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % itemRef.length; // циклічно вперед
    updateTransform();
  }

  if (evt.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + itemRef.length) % itemRef.length; // циклічно назад
    updateTransform();
  }
});



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
  }

  const elements = numbers.map((item) => {
    const size = 30 + item * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();
    div.style.margin = "5px";
    div.style.display = "inline-block";
    return div;
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