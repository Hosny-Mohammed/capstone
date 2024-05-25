document.getElementById('locationButton').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            alert(`Location services are enabled. Your position is: 
                Latitude: ${position.coords.latitude}, 
                Longitude: ${position.coords.longitude}`);
        }, () => {
            alert('Error: The Geolocation service failed.');
        });
    } else {
        alert('Error: Your browser doesn\'t support geolocation.');
    }
});

document.getElementById('aroundYouButton').addEventListener('click', () => {
    alert('Feature coming soon!');
});
