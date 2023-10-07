//back?????????????


document.addEventListener('DOMContentLoaded', function () {
    // Parse the concertId from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const concertId = urlParams.get('concertId');

    // Replace 'your-api-endpoint' with the actual endpoint to fetch concert details
    fetch(`https://your-backend-api.com/concerts/${concertId}`)
        .then(response => response.json())
        .then(data => {
            // Populate concert details from the data received
            document.getElementById('concert-name').textContent = data.name;
            document.getElementById('concert-image').src = data.image;
            document.getElementById('ticket-price').textContent = `Ticket Price: $${data.price}`;
            document.getElementById('ticket-amount').textContent = `Ticket Amount: ${data.amount}`;
            document.getElementById('concert-description').textContent = data.description;
        })
        .catch(error => {
            console.error('Error fetching concert details:', error);
        });
});

// Function to handle the "Buy Ticket" button click
function buyTicket() {
    // Get the selected ticket price and amount
    const selectedPrice = document.getElementById('ticket-price-select').value;
    const selectedAmount = document.getElementById('ticket-amount-select').value;
    
    // Implement your logic to handle the selected ticket price and amount
    // For example, you can display an alert with the selected values
    alert(`You selected:\nTicket Price: ${selectedPrice}\nTicket Amount: ${selectedAmount}`);
} // Function to handle the "Add" button click
