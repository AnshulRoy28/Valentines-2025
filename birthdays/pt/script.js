// Handle Ferris Wheel Image Clicks
document.querySelectorAll('.seat img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('popup-img').src = this.src;
        document.getElementById('popup').style.display = "flex";
    });
});

// Close Popup
function closePopup() {
    document.getElementById('popup').style.display = "none";
}
