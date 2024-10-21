const toggler = document.querySelector(".btn");
toggler.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});
const sidebar = document.getElementById("sidebar");

sidebar.addEventListener("mouseenter", function () {
    sidebar.classList.remove("collapsed");
});

sidebar.addEventListener("mouseleave", function () {
    sidebar.classList.add("collapsed");
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

// Function to handle routing and dynamic loading
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

// Listen for hash changes to trigger content loading
window.addEventListener('hashchange', loadContent);

// Load the initial content when the page loads
window.addEventListener('load', loadContent);
