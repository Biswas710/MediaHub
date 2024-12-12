
function filterVectors() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const vectors = document.querySelectorAll('.photo-grid img');

    // Loop through each vector and filter
    vectors.forEach(vector => {
        const title = vector.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            vector.style.display = 'block'; // Show vector
        } else {
            vector.style.display = 'none'; // Hide vector
        }
    });
}
=======
function filterVectors() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const vectors = document.querySelectorAll('.photo-grid img');

    // Loop through each vector and filter
    vectors.forEach(vector => {
        const title = vector.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            vector.style.display = 'block'; // Show vector
        } else {
            vector.style.display = 'none'; // Hide vector
        }
    });
}
>>>>>>> d42124c63a13791bd57a50341b3d6e459818ce68
