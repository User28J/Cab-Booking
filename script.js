function calculateFare() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const distance = document.getElementById('distance').value;
    const rate = 16; // Rate per kilometer

    const fare = distance * rate;
    const result = document.getElementById('result');
    result.textContent = `Hello ${name}, your cab fare for ${distance} km on ${date} is ₹${fare}.`;

    // Construct the email body with customer details
    const emailBody = `Customer Name: ${name}%0D%0ABooking Date: ${date}%0D%0ADistance: ${distance} km%0D%0AFare: ₹${fare}`;

    // Encode the email subject and body for URL
    const emailSubject = encodeURIComponent('New Cab Booking');
    const emailBodyEncoded = encodeURIComponent(emailBody);

    // Construct the mailto link
    const mailtoLink = `mailto:bjhansi028@gmail.com?subject=${emailSubject}&body=${emailBodyEncoded}`;

    // Open the default email client with the constructed mailto link
    window.open(mailtoLink);
}