const categoriesList = document.querySelectorAll('.item');
const categoriesEl = document.querySelector('.item');

categoriesList.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
