const container = document.querySelector('#itemsContainer');

const displayItems = (dataMeals) => {
  dataMeals.forEach(async (meals) => {
    
    const mainDiv = document.createElement('div');
    mainDiv.className = 'dflex container';
    mainDiv.innerHTML = `
    <div class="item dflex">
      <img class="mealimg" id="${meals.idMeal}" src="${meals.strMealThumb}" alt="${meals.strMealThumb}">
      <div class="dflex mealtitle">
        <h2>${meals.strMeal}</h2>
       
      </div>
        <button class="testing" id="comments">Comments</button>
      </div>
    `;

    container.appendChild(mainDiv);
  });
};

const getItems = async () => {
  const request = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Chicken');
  const data = await request.json();
  displayItems(data.meals);
  homeItemCounter(data.meals.length);
};

export default getItems;