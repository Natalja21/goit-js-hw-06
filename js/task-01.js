

const categoriesRefs = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRefs.length}`);

const categoriesArray = [...categoriesRefs]
    .map
    (el => `Category: ${el.children[0].textContent}
Elements: ${el.children[1].children.length}`)
    .join("\n");

console.log(categoriesArray);