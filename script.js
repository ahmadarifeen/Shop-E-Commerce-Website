const sidebar = document.getElementById("sidebar");
let collapseTimeout; // Variable to store the collapse timeout

// Ensure the sidebar is collapsed when the page loads
sidebar.classList.add("collapsed");

// Target the correct element (in this case, the .btn or nav icon)
const navIcon = document.querySelector(".btn"); // Replace with your actual menu icon

// Expand the sidebar when hovering over the nav icon
navIcon.addEventListener("mouseenter", function () {
    clearTimeout(collapseTimeout); // Clear any scheduled collapse
    sidebar.classList.remove("collapsed");
});

// Collapse the sidebar after a slight delay when leaving the sidebar
sidebar.addEventListener("mouseleave", function () {
    collapseTimeout = setTimeout(function () {
        sidebar.classList.add("collapsed");
    }, 200); // Adjust delay as necessary (200ms in this case)
});

// Optional: keep the sidebar open while hovering over it
sidebar.addEventListener("mouseenter", function () {
    clearTimeout(collapseTimeout); // Prevent collapsing when moving to the sidebar
});


// Function to load external HTML files
function loadExternalContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data; // Inject the content into the 'content' div
        })
        .catch(err => {
            document.getElementById('content').innerHTML = '<h2>Error</h2><p>Could not load content.</p>';
        });
}

// Define routes for the app
const routes = {
    '#home': '<h2>Welcome to the Home Page</h2><p>This is the home section.</p>',
    '#allOffers': 'allOffers.html',  // This is the external file we will fetch
    '#about': 'about.html',          // External file for About section
};

function loadContent() {
    const hash = window.location.hash || '#home'; // Default to home if no hash
    const page = routes[hash]; // Get the page or content corresponding to the hash
    
    if (page.endsWith('.html')) {
        // If it's an external file, load it via fetch
        loadExternalContent(page);
    } else {
        // Otherwise, set the content directly from the routes object
        document.getElementById('content').innerHTML = page;
    }
}

window.addEventListener('hashchange', loadContent);
window.addEventListener('load', loadContent);

    // Set the date for the countdown (change to your desired date)
    const countdownDate = new Date("December 1, 2024 00:00:00").getTime();

    // Update the countdown every second
    const x = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "SALE ENDED";
        }
    }, 1000);

  
document.getElementById("openChat").addEventListener("click", function() {
    document.getElementById("chatbox").style.display = "flex"; // Show chatbox
});

document.getElementById("closeChat").addEventListener("click", function() {
    document.getElementById("chatbox").style.display = "none"; // Hide chatbox
});

document.getElementById("sendMessage").addEventListener("click", function() {
    const inputField = document.getElementById("chatInput");
    const messageText = inputField.value;

    if (messageText.trim() !== "") {
        // Create a new message element
        const messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messageElement.className = "message";

        // Append the message to the chatbox messages
        document.getElementById("chatboxMessages").appendChild(messageElement);
        
        // Clear the input field
        inputField.value = "";

        // Scroll to the bottom of the chatbox
        const messagesContainer = document.getElementById("chatboxMessages");
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

// Allow pressing 'Enter' to send a message
document.getElementById("chatInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("sendMessage").click(); // Trigger send message
    }
});

// Function to show the modal
function showNewsletterPopup() {
    document.getElementById("newsletterModal").style.display = "block";
}

// Scroll event listener
window.onscroll = function() {
    // Get the target section element
    var targetSection = document.getElementById("women-section");
    
    // Get the position of the section relative to the viewport
    var sectionPosition = targetSection.getBoundingClientRect().top;
    
    // Trigger popup if the section is scrolled past
    if (sectionPosition < window.innerHeight) {
        // Show the newsletter popup and remove scroll listener
        showNewsletterPopup();
        window.onscroll = null; // Prevent the modal from appearing again on subsequent scrolls
    }
};

// Close the modal when the user clicks the "X" button
document.getElementById("closeModal").onclick = function() {
    document.getElementById("newsletterModal").style.display = "none";
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById("newsletterModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

