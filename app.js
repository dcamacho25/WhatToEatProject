let selectTime = document.getElementById("selectTime");
let selectMeal = document.getElementById("selectMeal");
const recipeButton = document.getElementById("recipeButton"); 
const recipeBox = document.getElementById('recipeContainer');

function filterList(recipeList) {
  let mealChoice = selectMeal.value.toLowerCase();
  let timeChoice = parseInt(selectTime.value);
  recipeList.forEach(list => {
    if(list.time <= timeChoice && list.category === mealChoice) {
      let div = document.createElement('div');
      div.textContent = list.title
      recipeContainer.appendChild(div);
    } else if (list.time <= timeChoice){
      let div = document.createElement('div');
      div.textContent = list.title
      recipeContainer.appendChild(div);
    } else if (list.category === mealChoice) {
      let div = document.createElement('div');
      div.textContent = list.title
      recipeContainer.appendChild(div);
    }fil
  });
};

// function printTitle(title){
//   recipeBox.innerHTML = `<h1> ${title} <h1>`
// }

// Event Listener to receive time and meal
recipeButton.addEventListener('click', () =>{
// Fetch data for recipes
fetch('https://dcamacho25.github.io/WhatToEatProject/recipes.json')
  .then(response => response.json())
  .then(filterList)
});

// Add Recipe below the GO buton


