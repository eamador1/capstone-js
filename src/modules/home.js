document.addEventListener("DOMContentLoaded", () => {
  const mealList = document.querySelector(".meal-list");

  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
//   fetch("www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then(({ meals }) => {
      if (meals) {
        meals.forEach((meal) => {
          const listItem = document.createElement("li");
          listItem.className = "meal-item";

          const { strMealThumb, strMeal, strInstructions } = meal;
          console.log({ strMealThumb, strMeal, strInstructions })

          const mealDiv = createMealDiv(strMealThumb, strMeal, strInstructions);

          const commentButton = createButton("Comment", "comment-button");
          const reserveButton = createButton("Reserve", "reserve-button");

          mealDiv.append(commentButton, reserveButton);

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

  const createMealDiv = (thumbnail, name, recipe) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal";

    const thumbnailElement = document.createElement("img");
    thumbnailElement.src = thumbnail;
    thumbnailElement.alt = name;

    const nameElement = document.createElement("h2");
    nameElement.textContent = name;

    const recipeElement = document.createElement("p");
    recipeElement.textContent = recipe;

    mealDiv.append(thumbnailElement, nameElement, recipeElement);
    return mealDiv;
  };

  const createButton = (text, className) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = className;
    return button;
  };
});
