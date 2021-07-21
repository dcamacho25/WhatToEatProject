let selectTime = document.getElementById("selectTime");
let selectMeal = document.getElementById("selectMeal");
const recipeButton = document.getElementById("recipeButton"); 
const recipeBox = document.getElementById('recipeContainer');

function filterList(recipeList) {
  let mealChoice = selectMeal.value.toLowerCase();
  let timeChoice = parseInt(selectTime.value);
  recipeList.forEach(list => {
    if(list.time <= timeChoice && list.category === mealChoice) {
      let card = document.createElement('div');
      let cardBody = document.createElement('div');
      let cardTitle = document.createElement('div');

      card.classList.add('card', 'border', 'border-2', 'text-start', 'rounded', 'bg-dark', 'm-2');
      cardBody.classList.add('card-body');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = list.title;
      
      recipeContainer.appendChild(card);
      card.appendChild(cardBody);
      cardBody.appendChild(cardTitle);
    } else if (list.time <= timeChoice && mealChoice === 'pick your meal'){
      let card = document.createElement('div');
      let cardBody = document.createElement('div');
      let cardTitle = document.createElement('div');

      card.classList.add('card', 'border', 'border-2', 'text-start', 'rounded', 'bg-dark', 'm-2');
      cardBody.classList.add('card-body');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = list.title;
      
      recipeContainer.appendChild(card);
      card.appendChild(cardBody);
      cardBody.appendChild(cardTitle);
    } else if (timeChoice === NaN && list.category === mealChoice) {
      let card = document.createElement('div');
      let cardBody = document.createElement('div');
      let cardTitle = document.createElement('div');

      card.classList.add('card', 'border', 'border-2', 'text-start', 'rounded', 'bg-dark', 'm-2');
      cardBody.classList.add('card-body');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = list.title;
      
      recipeContainer.appendChild(card);
      card.appendChild(cardBody);
      cardBody.appendChild(cardTitle);
    }
  });
};

// Event Listener to receive time and meal
recipeButton.addEventListener('click', () =>{
// Fetch data for recipes
fetch('https://dcamacho25.github.io/WhatToEatProject/recipes.json')
  .then(response => response.json())
  .then(filterList)
});



