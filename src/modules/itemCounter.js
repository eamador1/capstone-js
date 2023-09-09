const homeItemCounter = (containerItems) => {
  const hometitle = document.querySelector('#mainTitle');
  hometitle.textContent = `${containerItems} Chicken Food Recipes`;
  return hometitle.textContent;
};

export default homeItemCounter;