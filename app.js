let selectTime = document.getElementById("selectTime");
let selectMeal = document.getElementById("selectMeal");
const recipeButton = document.getElementById("recipeButton");


// Event Listener to receive time and meal
// recipeButton.addEventListener('click', () =>{
//     let displayTime = selectTime.options[selectTime.selectedIndex].text;
//     let displayMeal = selectMeal.options[selectMeal.selectedIndex].text;
//     console.log(displayTime, displayMeal);
// });

// Add Recipe below the GO buton
recipeButton.addEventListener('click', () =>{
    let article = document.getElementById('recipeContainer');
    let div = document.createElement('div');
    div.textContent = "hello world";
    const cls = ["border", "border-primary", "mt-5"];
    div.classList.add(...cls);
    article.appendChild(div);
});