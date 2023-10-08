//back?????????????


document.addEventListener('DOMContentLoaded', function () {
    // Fetch the concert date from your backend API
    fetch('https://your-backend-api.com/concert-date-endpoint')
        .then(response => response.json())
        .then(data => {
            // Assuming the date is in the format 'dd/mm/yyyy'
            const concertDate = data.date;
            
            // Update the concert date in the HTML
            const datePlaceholder = document.getElementById('date-placeholder');
            datePlaceholder.textContent = concertDate;
        })
        .catch(error => {
            console.error('Error fetching concert date:', error);
        });

    // Rest of your code...

    // Function to handle the "Buy Ticket" button click
    function buyTicket() {
        // Get the selected ticket price and amount
        const selectedPrice = document.getElementById('ticket-price-select').value;
        const selectedAmount = document.getElementById('ticket-amount-select').value;
        
        // Implement your logic to handle the selected ticket price and amount
        // For example, you can display an alert with the selected values
        alert(`You selected:\nTicket Price: ${selectedPrice}\nTicket Amount: ${selectedAmount}`);
    }

    const buyButton = document.getElementById('buy-ticket-button');
    buyButton.addEventListener('click', buyTicket);
});
