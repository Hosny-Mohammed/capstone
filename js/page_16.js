document.querySelector('.done-button').addEventListener('click', function() {
    const pickupPoint = document.getElementById('pickup-point').value;
    const destination = document.getElementById('destination').value;
    console.log(`Pickup Point: ${pickupPoint}, Destination: ${destination}`);
    alert(`Pickup Point: ${pickupPoint}\nDestination: ${destination}`);
});
