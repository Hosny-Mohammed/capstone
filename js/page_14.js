document.querySelector('.back-icon').addEventListener('click', () => {
    window.location.assign("page_13.html");
});

document.querySelector('.more-places p').addEventListener('click', () => {
    window.location.assign("page_15.html");
});

document.querySelector('.setting-item:nth-child(3) h4').addEventListener('click', () => {
    alert('Sign Out clicked!');
});
