let selectTime = document.getElementById("selectTime");
let selectMeal = document.getElementById("selectMeal");
const recipeButton = document.getElementById("recipeButton"); 

function filterList(recipeList) {
  const mealChoice = selectMeal.value.toLowerCase();
  recipeList.forEach(list => {
    if(list.category === mealChoice) {
      console.log(list.title);
    }
  });
};

// Event Listener to receive time and meal
recipeButton.addEventListener('click', () =>{
// Fetch data for recipes
fetch('https://dcamacho25.github.io/WhatToEatProject/recipes.json')
  .then(response => response.json())
  .then(filterList);
});

// Add Recipe below the GO buton
// recipeButton.addEventListener('click', () =>{
//     const recipeBox = document.getElementById('recipeContainer');
//     recipeBox.innerHTML = `<h1> Title <h1>`
// });

