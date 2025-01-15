function showDetails(car) {
    let details = '';
    switch (car) {
        case 'car1':
            details = 'Tesla Model S: An all-electric luxury sedan with impressive range and performance.';
            break;
        case 'car2':
            details = 'Ford Mustang: A classic American muscle car known for its powerful engines and sporty design.';
            break;
        case 'car3':
            details = 'Chevrolet Camaro: A stylish and powerful sports car with a rich history.';
            break;
        default:
            details = 'Car details not found.';
    }
    document.getElementById('details').innerText = details;
    document.getElementById('car-list').style.display = 'none';
    document.getElementById('car-details').style.display = 'block';
}

function hideDetails() {
    document.getElementById('car-list').style.display = 'block';
    document.getElementById('car-details').style.display = 'none';
}