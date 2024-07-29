// Wait for the page to finish loading before executing code
document.addEventListener("DOMContentLoaded", function () {
  // Get the list of all movies and populate the movie list on the page
  fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then((data) => {
      const movieList = document.querySelector("#films");
      data.forEach((movie) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href='#' data-id='${movie.id}'>${movie.id} - ${movie.title}</a>`;
        movieList.appendChild(li);
      });

      //   Add click event listener to all movie links in the movie list
      movieList.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const movieId = event.target.dataset.id;
          displayMovieDetails(movieId);
        });
      });
    });

  // Display the details of the first movie on page load
  displayMovieDetails(1);

  //   Add click event listener to the Buy Ticket button
  const buyTicketBtn = document.querySelector("#buy-ticket-btn");
  buyTicketBtn.addEventListener("click", function (event) {
    const availableTickets =
      document.querySelector("#movie-tickets").dataset.availableTickets;
    if (availableTickets > 0) {
      const updatedAvailableTickets = availableTickets - 1;
      document.querySelector("#movie-tickets").dataset.availableTickets =
        updatedAvailableTickets;
      document.querySelector(
        "#movie-tickets"
      ).textContent = `Available Tickets: ${updatedAvailableTickets}`;
    } else {
      alert("Sorry, this show is sold out!");
    }
  });
});

// Function to display the details of a movie
function displayMovieDetails(movieId) {
  fetch(`http://localhost:3000/films/${movieId}`)
    .then((response) => response.json())
    .then((movie) => {
      // Get the UI elements
      const moviePoster = document.querySelector("#movie-poster");
      const movieTitle = document.querySelector("#movie-title");
      const movieRuntime = document.querySelector("#movie-runtime");
      const movieShowtime = document.querySelector("#movie-showtime");
      const movieTickets = document.querySelector("#movie-tickets");

      // Set the movie details to the UI elements
      moviePoster.src = movie.poster;
      movieTitle.textContent = movie.title;
      movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
      movieShowtime.textContent = `Showtime: ${movie.showtime}`;
      const availableTickets = movie.capacity - movie.tickets_sold;
      movieTickets.textContent = `Available Tickets: ${availableTickets}`;
      movieTickets.setAttribute("data-available-tickets", availableTickets);
    });
}
