document.querySelector('.back-icon').addEventListener('click', () => {
    alert('Back button clicked!');
});

document.querySelectorAll('.option-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index === 0) {
            alert('Saved Places clicked!');
        } else {
            alert('Set location on map clicked!');
        }
    });
});
