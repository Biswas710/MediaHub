// Function to filter media categories based on search input
function searchMedia() {
    // Get the value entered in the search input field
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    // Select all category cards in the categories section
    const cards = document.querySelectorAll(".categories .card");

    // Loop through each card
    cards.forEach((card) => {
        // Get the category name from the data-category attribute
        const category = card.getAttribute("data-category").toLowerCase();

        // If the category matches the search query, show the card; otherwise, hide it
        if (category.includes(searchValue)) {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}
