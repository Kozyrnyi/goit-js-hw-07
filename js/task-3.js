const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", () => {
    const inputVal = nameInput.value.trim();
    nameOutput.textContent = inputVal ? inputVal : "Anonymous";
});
