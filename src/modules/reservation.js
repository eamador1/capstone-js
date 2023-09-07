const showReservation = async (meal) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="contImage">
        <img src="${meal.strCategoryThumb}" alt="meal image">
      </div>
      <header class="title">
        <h2>${meal.strCategory}</h2>
      </header>
      <p>${meal.strCategoryDescription}</p>
      <h5>Reservations</h5>
      <div class="contReservations"></div>
      <h5>Add a reservation</h5>
      <form class="reservationForm">
        <div>
          <input type="text" placeholder="Your name" required>
        </div>  
        <div>
          <input type="date" class="start" min="2023-01-01" max="2023-12-31" required>
        </div>
        <div>
          <input type="date" class="end" min="2023-01-01" max="2023-12-31" required>
        </div>
        <input type="submit" class="submit" value="Reserve">
      </form>
      <button class="closeButton" onclick="closeModal()">&times;</button>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.closeButton').addEventListener('click', () => {
        document.body.removeChild(popup);
      });
      
  };
  
  export { showReservation };
x