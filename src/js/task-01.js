const categories = document.querySelector('#categories');
const categoriesItems = Array.from(categories.children);

console.log(`Number of categories: ${categoriesItems.length}`);
console.log('');

categoriesItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
    console.log('');
});