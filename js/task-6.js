function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const boxes = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("#controls input");
const SIZE = 30;

let boxesArr = [];
function createBoxes(amount) {
    if (amount > 0 && amount <= 100) {
        destroyBoxes();
        for (let i = 0; i < amount; i++) {
            const elem = document.createElement("div");
            elem.style.width = `${SIZE + 10 * i}` + "px";
            elem.style.height = `${SIZE + 10 * i}` + "px";
            elem.style.backgroundColor = getRandomHexColor();
            boxesArr.push(elem);
        }
        boxes.append(...boxesArr);
    }
}

function destroyBoxes() {
    boxes.innerHTML = "";
    boxesArr = [];
    input.value = "";
}

createBtn.addEventListener("click", () => {
    const amount = input.value;
    createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
