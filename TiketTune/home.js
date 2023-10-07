//ส่วนหลัง????????????
document.addEventListener('DOMContentLoaded', function () {
    const concertList = document.querySelector('.concert-list');

    // Function to generate concert items
    function createConcertItem(concert) {
        const concertItem = document.createElement('div');
        concertItem.classList.add('concert-item');
        concertItem.innerHTML = `
            <img src="${concert.imageUrl}" alt="${concert.name}">
            <h2>${concert.name}</h2>
            <a href="concertdescription.html?concertId=${concert.id}">Description</a>
        `;
        return concertItem;
    }

    // Example concert data (replace with data fetched from your backend)
    const concertsData = [
        { id: 1, name: 'Concert Name 1', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 2, name: 'Concert Name 2', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 3, name: 'Concert Name 3', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 4, name: 'Concert Name 4', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 5, name: 'Concert Name 5', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 6, name: 'Concert Name 6', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 7, name: 'Concert Name 7', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 8, name: 'Concert Name 8', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
        { id: 9, name: 'Concert Name 9', imageUrl: 'istockphoto-1255230725-612x612.jpg' },
    ];

    // Populate the concert list with data
    concertsData.forEach(concert => {
        const concertItem = createConcertItem(concert);
        concertList.appendChild(concertItem);
    });
});
