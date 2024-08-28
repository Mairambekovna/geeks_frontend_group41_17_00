document.getElementById('generateBtn').addEventListener('click', generateOTP);

function generateOTP() {
    const otpDisplay = document.getElementById('otpDisplay');
    otpDisplay.innerHTML = '';

    const otpLength = getRandomInt(4, 8);
    for (let i = 0; i < otpLength; i++) {
        const randomNumber = getRandomInt(0, 9);
        const otpElement = document.createElement('div');
        otpElement.classList.add('otp-number');
        otpElement.textContent = randomNumber;
        otpDisplay.appendChild(otpElement);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
