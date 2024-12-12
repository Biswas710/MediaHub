// Function to filter illustrations
function filterIllustrations() {
    // Get the search input value and convert it to lowercase
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    // Get all the images in the gallery
    const illustrations = document.querySelectorAll("#gallery .photo-grid img");

    // Loop through each image to check if it matches the search query
    illustrations.forEach((image) => {
        const title = image.getAttribute("data-title").toLowerCase();

        // If the title includes the search value, display the image; otherwise, hide it
        if (title.includes(searchValue)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}
