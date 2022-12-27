function formatNumber(number, template) {
    const len = (String(number)).length;
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
}

const result = formatNumber(972747271127, "+### (0##) ### ####")
console.log(result);
