function format(phoneNumber) {
    let phoneDigits = "";
    for (let char of phoneNumber) {
        let charNumber = Number(char);
        if (!isNaN(charNumber) && char !== " ")
            phoneDigits += char;
    }
    if (phoneDigits.startsWith("0")) {
        phoneDigits = phoneDigits.slice(1);
    }
    if (phoneDigits.length !== 12) {
        phoneDigits = "996" + phoneDigits;
    }
    return phoneDigits;
}

function getOperatorCode(phoneNumber) {
    return phoneNumber.slice(3,6);
}

function checkNurTelecom(code){
    let codes = ["501", "502", "701", "702", "703", "704"];
    return codes.includes(code);
}

function checkMega(code){
    let codes = ["551", "552"];
    return codes.includes(code);
}
function checkBeeline(code) {
    let codes = ["770", "771", "772", "773", "220"];
    return codes.includes(code);
}
function detectOperator(phoneNumber) {
    let formattedPhoneNumber = format(phoneNumber);
    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if(checkNurTelecom(operatorCode))
        return "O!";
    if(checkMega(operatorCode))
        return "MEGA";
    if(checkBeeline(operatorCode))
        return "BEELINE";
    return "Error";
}


function hidePhone(phoneNumber) {
    let cleanedPhone=phoneNumber.replace(/[^+\d]/g, '');
    if(cleanedPhone.length < 4) {
        throw new Error("Недостаточная длина номера телефона.");
    }
    return cleanedPhone.slice(0, -2) + 'xx';
}
const hiddenPhone = hidePhone("+996 555 123 123");
console.log(hiddenPhone);


function capitalizeString(str){
    let lowerStr = str.toLowerCase();
    let capitalizedStr = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
    return capitalizedStr;
}

console.log(capitalizeString("ЕВГЕНИЙ"));
console.log(capitalizeString("иВАНОВ"));
console.log(capitalizeString("ОЛЕГ"));
console.log(capitalizeString("юрий"));
console.log(capitalizeString("НатальЯ"));



function maskCard(cardNumber, maskChar) {
    if(cardNumber.length < 10) {
        throw new Error("Card number should be at least 10 digits long");
    }
    const firstSix = cardNumber.slice(0, 6);
    const lastFour = cardNumber.slice(-4);
    const maskedSection=maskChar.repeat(cardNumber.length - 10);
    return `${firstSix}${maskedSection}${lastFour}`;
}

console.log(maskCard("4815154823541789", "X"));
console.log(maskCard("4815154823541789", "*"));
console.log(maskCard("481515482354178", "#"));
