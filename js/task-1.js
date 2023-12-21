const categoriesList = document.getElementById('categories');
const allCategories = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', allCategories.length);

allCategories.forEach((categoryItem) => {
    const categoryName = categoryItem.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);

    const subCategories = categoryItem.querySelectorAll('ul li');
    console.log(`Elements: ${subCategories.length}`);
});