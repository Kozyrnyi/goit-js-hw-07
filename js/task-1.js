const allCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
