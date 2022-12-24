function getID(idNumber) {
    let y = 0;
    let x = 0;
    const id = idNumber.split('');
    for(let i = 0; i < id.length; i++) {
        if(i % 2 === 0) {
            x = id[i] * 1;
            y += x;
        } else {
            x = id[i] * 2;
            if(x <= 9) {
                y += x;
            } else {
                y += (Math.floor(x / 10)) + (x % 10)
            }
        }
    }
    return 10 - y % 10;
}

const testNumber = getID('30099441');
console.log(testNumber);