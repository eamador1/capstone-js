document.addEventListener("DOMContentLoaded", function () {
  const mealList = document.querySelector(".meal-list");

  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then((response) => response.json())
    .then((data) => {
      const meals = data.meals;

      if (meals) {
        meals.forEach((meal) => {
          const listItem = document.createElement("li");
          listItem.className = "meal-item";

          const mealDiv = document.createElement("div");
          mealDiv.className = "meal";

          const thumbnail = document.createElement("img");
          thumbnail.src = meal.strMealThumb;
          thumbnail.alt = meal.strMeal;

          const mealName = document.createElement("h2");
          mealName.textContent = meal.strMeal;

          const recipe = document.createElement("p");
          recipe.textContent = meal.strInstructions;

          mealDiv.appendChild(thumbnail);
          mealDiv.appendChild(mealName);
          mealDiv.appendChild(recipe);

          listItem.appendChild(mealDiv);

          mealList.appendChild(listItem);
        });
      } else {
        mealList.textContent = "No vegetarian meals found.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      mealList.textContent = "An error occurred while fetching data.";
    });
});
