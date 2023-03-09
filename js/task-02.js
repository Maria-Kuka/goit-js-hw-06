const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const categoriesRef = document.querySelector('#ingredients')



const liListRef = ingredients.map((name) => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = name;
  return liRef;
})

categoriesRef.append(...liListRef)
console.log(categoriesRef)

