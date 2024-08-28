document.getElementById('redLight').addEventListener('mouseenter', function() {
    displayMessage('СТОП');
    this.style.backgroundColor = 'red';
});

document.getElementById('redLight').addEventListener('mouseleave', function() {
    clearMessage();
    this.style.backgroundColor = '#bbb';
});

document.getElementById('yellowLight').addEventListener('mouseenter', function() {
    displayMessage('ЖДИ');
    this.style.backgroundColor = 'yellow';
});

document.getElementById('yellowLight').addEventListener('mouseleave', function() {
    clearMessage();
    this.style.backgroundColor = '#bbb';
});

document.getElementById('greenLight').addEventListener('mouseenter', function() {
    displayMessage('ИДИ');
    this.style.backgroundColor = 'green';
});

document.getElementById('greenLight').addEventListener('mouseleave', function() {
    clearMessage();
    this.style.backgroundColor = '#bbb';
});

function displayMessage(message) {
    document.getElementById('messageDisplay').textContent = message;
}

function clearMessage() {
    document.getElementById('messageDisplay').textContent = '';
}
