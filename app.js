document.addEventListener('DOMContentLoaded', () => {
    const currentImage = document.getElementById('current-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            currentImage.src = thumbnail.src;
        });
    });
});