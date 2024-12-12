// Sample data for photos and their descriptions
const photos = {
    landscape: [
        { src: "landscape1.jpg", description: "Beautiful landscape view during sunset." },
        { src: "landscape2.jpg", description: "Mountain landscape with lush greenery." },
        { src: "landscape3.jpg", description: "Serene lake surrounded by hills." }
    ],
    sunset: [
        { src: "sunset1.jpg", description: "Sunset over the ocean horizon." },
        { src: "sunset2.jpg", description: "Golden hour light at the beach." },
        { src: "sunset3.jpg", description: "Orange sky as the sun sets behind mountains." }
    ],
    mountains: [
        { src: "mountain1.jpg", description: "Snow-covered mountains at dawn." },
        { src: "mountain2.jpg", description: "Rocky mountain peak under clear skies." },
        { src: "mountain3.jpg", description: "Mountain view from a forest trail." },
        { src: "mountain4.jpg", description: "Alpine mountains with a clear blue sky." },
        { src: "mountain5.jpg", description: "High mountain peaks covered in snow." }
    ],
    forest: [
        { src: "forest1.jpg", description: "Misty forest during early morning." },
        { src: "forest2.jpg", description: "Tall trees with sunlight filtering through the leaves." },
        { src: "forest3.jpg", description: "A serene forest path leading through the woods." }
    ],
    beach: [
        { src: "beach1.jpg", description: "White sand beach with turquoise water." },
        { src: "beach2.jpg", description: "Golden sunset over the beach." },
        { src: "beach3.jpg", description: "Secluded beach with clear water and palm trees." }
    ]
};

// Filter photos based on search input
function filterPhotos() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const photos = document.querySelectorAll(".photo-grid img");

    photos.forEach(photo => {
        const title = photo.getAttribute("data-title").toLowerCase();
        if (title.includes(searchTerm)) {
            photo.style.display = "inline-block"; // Show matching photos
        } else {
            photo.style.display = "none"; // Hide non-matching photos
        }
    });
}

// Open the modal with more images related to the clicked photo
function openModal(title) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImages = document.getElementById("modal-images");

    modalTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1); // Capitalize first letter
    modalImages.innerHTML = ""; // Clear existing modal images

    // Get related images for the clicked photo category
    photos[title].slice(0, 5).forEach(photo => { // Limit to 5 images
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = title;
        const description = document.createElement("p");
        description.textContent = photo.description;
        const div = document.createElement("div");
        div.appendChild(img);
        div.appendChild(description);
        modalImages.appendChild(div);
    });

    modal.style.display = "block"; // Show modal
}

// Close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
