// Function to create the cards
function createCards(data) {
    const container = document.querySelector('main');

    // Loop through the JSON data
    data.forEach(item => {

        // Create card container element
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        // Create card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Create front side of the card
        const front = document.createElement('div');
        front.classList.add('card__front');
        front.style.backgroundImage = `url('${item.image}')`

        // // Create title for the front side of the card
        // const titleFront = document.createElement('h2');
        // titleFront.classList.add('card__title');
        // titleFront.textContent = item.name;

        // front.appendChild(titleFront);

        // Create back side of the card
        const back = document.createElement('div');
        back.classList.add('card__back');

        // Create title for the back side of the card
        const titleBack = document.createElement('h2');
        titleBack.classList.add('card__title');
        titleBack.textContent = item.name;

        // Create description for the back side of the card
        const description = document.createElement('p');
        description.classList.add('card__description');
        description.textContent = item.description;

        back.appendChild(titleBack);
        back.appendChild(description);

        card.appendChild(front);
        card.appendChild(back);

        cardContainer.appendChild(card);
        container.appendChild(cardContainer);
    });
}

// Function to import the JSON data from an external file
function importJSON(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => createCards(data))
        .catch(error => console.error('Error importing JSON:', error));
}

// Path to the external JSON file
const jsonURL = 'https://gaimo.github.io/BestMovies/movies.json';

// Call the function to import and create the cards
importJSON(jsonURL);
