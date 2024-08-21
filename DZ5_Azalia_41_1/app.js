document.getElementById('redBtn').addEventListener('click', function() {
    displayMessage('СТОП');
    resetColors();
    this.style.backgroundColor = 'red';
});

document.getElementById('yellowBtn').addEventListener('click', function() {
    displayMessage('ЖДИ');
    resetColors();
    this.style.backgroundColor = 'yellow';
});

document.getElementById('greenBtn').addEventListener('click', function() {
    displayMessage('ИДИ');
    resetColors();
    this.style.backgroundColor = 'green';
});

function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

function resetColors() {
    document.getElementById('redBtn').style.backgroundColor = '#ff4d4d';
    document.getElementById('yellowBtn').style.backgroundColor = '#ffd11a';
    document.getElementById('greenBtn').style.backgroundColor = '#33cc33';
}
