# Meal Choice Project
Final project for Code Louisville Javascript 1 course. There are no special tools required for this web application to work. Please simply choose the amount of time you have to cook and which meal you want to receive a list of meals that can be made. At this time I do not have a list of directions or ingredients of each recipe but that will be added on later as the project grows.

## Requirements
- [x] Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
  The function filterList reads my .json file and parses the data so that I can display the recipes that match the user input when the user chooses the time and kind of meal from my site
- [x] Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
  The createCard function takes in 2 parameters (titles, classes) and returns col once it has had the necessary children appended to display the recipes that match the user input
- [x] Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)
  Created function to convert cups to tablespoons. Will continue to expand on this in the future
- [x] Project is uploaded to your GitHub repository and shows at minimum 5 separate commits
  See repo for all commits and pushes that were done. 
- [x] must have a responsive design through the use of media queries, Bootstrap, CSS Grid, Flexbox, and/or other similar approaches - we need to ensure that you can integrate your new JavaScript skills with your HTML/CSS skills you previously learned
  Utilized Bootstrap to format the website and will be adding media queries with javascript in the future to have 1 column of recipes on mobile and 2 columns on desktop