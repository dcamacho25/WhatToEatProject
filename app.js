let selectTime = document.getElementById('selectTime');
let selectMeal = document.getElementById('selectMeal');
let cupAmount = document.getElementById('cupInput');
let tbspAmount = document.getElementById('tbspOutput');
const recipeButton = document.getElementById('recipeButton');
const recipeBox = document.getElementById('recipeContainer');
const classesArray = ['card', 'border', 'border-2', 'text-start', 'rounded', 'bg-dark', 'm-2'];

// dividing 1 by 0.0625 converts cups to tablespoons
function calCupsToTbsp(){
  let tbspInCup = cupAmount.value / 0.0625;
  tbspAmount.innerText = tbspInCup;
}

function createCard(title, classes){
  let card = document.createElement('div');
  let cardBody = document.createElement('div');
  let cardTitle = document.createElement('div');

  card.classList.add(...classes);
  cardBody.classList.add('card-body');
  cardTitle.classList.add('card-title');

  cardTitle.textContent = title;
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  return card;

};

function filterList(recipeList) {
  let mealChoice = selectMeal.value.toLowerCase();
  let timeChoice = parseInt(selectTime.value);
  recipeList.forEach(list => {
    if(list.time <= timeChoice && list.category === mealChoice) {
      recipeContainer.appendChild(createCard(list.title, classesArray));
      
    } else if (list.time <= timeChoice && mealChoice === 'pick your meal'){
      recipeContainer.appendChild(createCard(list.title, classesArray));

    } else if (timeChoice === NaN && list.category === mealChoice) {
      recipeContainer.appendChild(createCard(list.title, classesArray));
    }
  });
};

// Event Listener to receive time and meal
recipeButton.addEventListener('click', () =>{
 recipeContainer.innerHTML = "";
// Fetch data for recipes
fetch('https://dcamacho25.github.io/WhatToEatProject/recipes.json')
  .then(response => response.json())
  .then(filterList)
});



