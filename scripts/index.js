// Dynamically populate the current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
// document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Hamburger navigation button
// Store the selected elements 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add click event listener to hamburger button and use callback function to toggle list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Function to generate a unique visitor ID
function generateVisitorId() {
    // Generate a universally unique identifier (UUID) version 4
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to check if a visitor ID exists in localStorage
function getVisitorId() {
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
        visitorId = generateVisitorId();
        localStorage.setItem('visitorId', visitorId);
    }
    return visitorId;
}

// Function to track unique visitors
function trackUniqueVisitors() {
    let uniqueVisitors = JSON.parse(localStorage.getItem('uniqueVisitors')) || {}; // Initialize as empty object if null

    let visitorId = getVisitorId();
    if (!uniqueVisitors[visitorId]) {
        uniqueVisitors[visitorId] = true;
        localStorage.setItem('uniqueVisitors', JSON.stringify(uniqueVisitors));

        // Increment your total unique visitors count here
        let totalUniqueVisitors = Object.keys(uniqueVisitors).length;
        console.log('Total unique visitors:', totalUniqueVisitors); // Log count to console
    }
}

// Call trackUniqueVisitors() on each page load to track unique visitors
trackUniqueVisitors();