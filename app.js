let selectTime = document.getElementById('selectTime');
let selectMeal = document.getElementById('selectMeal');

let cupAmount = document.getElementById('cupInput');
let tbspAmount = document.getElementById('tbspOutput');

const recipeButton = document.getElementById('recipeButton');
const recipeBox = document.getElementById('recipeContainer');
const classesArray = ['card', 'border', 'border-2', 'text-start', 'rounded', 'bg-dark', 'm-2'];
const resultClasses = ['border', 'border-2', 'bg-light', 'text-dark'];

// dividing 1 by 0.0625 converts cups to tablespoons
function calCupsToTbsp(){
  tbspAmount.innerHTML= '';
  let tbspInCup = cupAmount.value / 0.0625;
  let tbspResult = document.createElement('div')
  tbspResult.textContent = '= ' + tbspInCup + ' tablespoons';
  tbspAmount.appendChild(tbspResult);
  tbspResult.classList.add(resultClasses);
}

function createCard(title, classes){
  let card = document.createElement('div');
  let cardBody = document.createElement('div');
  let cardTitle = document.createElement('div');
  let col = document.createElement('div');
  
  col.classList.add('col');
  card.classList.add(...classes);
  cardBody.classList.add('card-body');
  cardTitle.classList.add('card-title');

  cardTitle.textContent = title;
  col.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  return col;

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



