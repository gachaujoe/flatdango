# Cinema Web App

This is a simple web application that allows users to view a list of movies and buy tickets for a selected movie. The app was built with HTML, CSS, and JavaScript, and uses a JSON server to store the movie data.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/gachaujoe/flatdango
```

2. Navigate to the project directory:

```bash
cd FlatDango
```

3. Install the dependencies:

```bash
npm install -g json-server
```

4. Start the JSON server:

```bash
json-server --watch db.json
```

### Usage

When you open the app, you will see a list of movies on the left-hand side of the screen. Click on a movie to view its details on the right-hand side of the screen, including its poster, title, runtime, showtime, and the number of available tickets.

To buy a ticket for the selected movie, click the "Buy Ticket" button. If there are available tickets, the number of available tickets will be updated and displayed on the screen. If there are no available tickets, an alert will be displayed indicating that the show is sold out.
