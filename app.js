let selectTime = document.getElementById("selectTime");
let selectMeal = document.getElementById("selectMeal");
const recipeButton = document.getElementById("recipeButton");

// Fetch data for recipes
fetch('https://dcamacho25.github.io/WhatToEatProject/recipes.json')
  .then(response => response.json())
  .then(filterList);

// Event Listener to receive time and meal
recipeButton.addEventListener('click', () =>{
    let displayTime = selectTime.options[selectTime.selectedIndex].text;
    let displayMeal = selectMeal.options[selectMeal.selectedIndex].text;
    console.log(displayTime, displayMeal);
});

// Add Recipe below the GO buton
recipeButton.addEventListener('click', () =>{
    const recipeBox = document.getElementById('recipeContainer');
    recipeBox.innerHTML = `<h1> Title <h1>`
});

function filterList(recipeList) {
  for(let i= 0; i<recipeList.length; i +=1){
    if (recipeList[i].category === "brunch"){
      console.log(recipeList[i]);
    }
  }
};