const categoriesList = document.querySelectorAll('.item');
const categoriesEl = document.querySelector('.item');

const numberOfCategories = categoriesList.length;
console.log('Number of categories:', numberOfCategories);

const categoryFirstName = document.querySelector('h2');
console.log('Category:', categoryFirstName.textContent);

const numberOfFirstEl = categoriesEl.querySelectorAll('li').length;
console.log('Elements:', numberOfFirstEl);

const categorySecondName = categoriesList[1].firstElementChild.textContent;
console.log('Category:', categorySecondName);

const numberOfSecondEl = categoriesList[1].lastElementChild.children.length;
console.log('Elements:', numberOfSecondEl);

const categoryThirdName = categoriesList[2].firstElementChild.textContent;
console.log('Category:', categoryThirdName);

const numberOfThirdEl = categoriesList[2].lastElementChild.children.length;
console.log('Elements:', numberOfThirdEl);

categoriesList.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
