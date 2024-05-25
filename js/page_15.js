document.querySelector('.back-icon').addEventListener('click', () => {
    window.location.assign("page_14.html");
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
