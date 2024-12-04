function filterPhotos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const photos = document.querySelectorAll('.photo-grid img');

    photos.forEach(photo => {
        const title = photo.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            photo.style.display = 'block'; 
        } else {
            photo.style.display = 'none'; 
        }
    });
}
