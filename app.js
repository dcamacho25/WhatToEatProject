let selectTime = document.getElementById("selectTime");
let selectMeal = document.getElementById("selectMeal");

function displayRecipe(){
    let displayTime = selectTime.options[selectTime.selectedIndex].text;
    let displayMeal = selectMeal.options[selectMeal.selectedIndex].text;
    console.log(displayTime, displayMeal);
};