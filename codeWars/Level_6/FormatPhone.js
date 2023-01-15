function formatNumber(number, template) {
    let counter = 0;
    template.split('').forEach((c) => {
        c === "#" ? counter += 1 : ""
    })
    const len = (String(number)).length;
    if (len >= counter) {
        let phoneNumber = "";
        let n = len-1;
        for(let i = 0; i < template.length; i++) {
            if(template[i] === "#") {
                phoneNumber += String(Math.floor(number / 10**n) % 10);
                n -= 1;
            } else {
                phoneNumber = phoneNumber + template[i];
            }
        }
        return phoneNumber;
    } else {
        return "Invalid phone number"
    }
}

const result = formatNumber(9720747271127, "+### (###) ### ####")
console.log(result);

const formNumber = document.querySelector('.form-number');
const inputNumber = document.querySelector('.input-number');
const submitButton = document.querySelector('.submit-button');
const myNumber = document.querySelector('.my-number');

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    myNumber.textContent = formatNumber(inputNumber.value, "+### (###) ### ####")
})
