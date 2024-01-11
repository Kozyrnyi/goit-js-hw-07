function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.body;
const colorElem = document.querySelector(".color");
changeColorBtn.addEventListener("click", () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    colorElem.textContent = color;
});
