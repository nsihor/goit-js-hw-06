const categories = document.querySelector('#categories');

const categoriesItems = categories.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesItems.length}`);
console.log('');

categoriesItems.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
    console.log('');
});