const isPalindrome = function(head) {
    for(let i = 0; i <= Math.floor(head.length / 2); i++) {
        if(head[i] !== head[head.length -1 -i]) {
            return false;
        }
    }
    return true;    
};

// console.log(isPalindrome([4, 5, 5, 4]));

const isPalindrome2 = function(x) {
    if (x < 0) {
        return false;
    }
    let divisor = 10;
    let lastRemainder = x % divisor;
    let xDigits = [lastRemainder];
    divisor *= 10;
    let currentRemainder = x % divisor;
    while(currentRemainder !== lastRemainder) {
        xDigits = [Math.floor((currentRemainder / (divisor/10))), ...xDigits]
        lastRemainder = currentRemainder;
        divisor *= 10;
        currentRemainder = x % divisor;
    }

    console.log(xDigits);
    
    const len = xDigits.length;
    for (let l = 0, r = len-1; l < len/2; l++, r--) {
        if (xDigits[l] !== xDigits[r]) {
            return false;
        }
    }   
    return true;
}

/**
 * 1. get a number in variable x. (example x=12)
 * 2. Create an array with unity digit of x as a first element. [2]
 *      Start from the tens digit with division by 100 and take the remainder.(12%100 = 12 => [2])
 *          If the remainder not equal to the last remainder,
 *              than division by 1000  for hundreds digit. (12%1000=12 => floor division of 12/10 => [1, 2])
 *      Go over with while loop until the remainder is equal to the last division. (12 % 1000 = 12 equal to the last!)
 *          For example: x=12
 * 3. put each digit of x to the array as a seperate element.
 * 4. Run with for loop on the array with indicators. 
 * one start with fisrt digit, another start from the last digit.
 * each indicator will run on half length of the array.
 *      5. If the both inidicators are equal?
 *          6. NO: The function return FALSE.
 *          6. YES: Each indicator go forward with it direction, and back to step 5.
 * 7. If the loop arriving here, without breaking so the number is palindrom and the function return TRUE.
 */

const isPalindrome3 = function(x) {

    if (x < 0) {
        return false;
    }

    let xDigits = []
    while (x > 0) {
        xDigits = [x % 10, ...xDigits];
        x = Math.floor(x / 10)
    }
    const len = xDigits.length;
    for (let l = 0, r = len-1; l < len/2; l++, r--) {
        if (xDigits[l] !== xDigits[r]) {
            return false;
        }
     }   
    return true;
}

// const result = isPalindrome3(4321)
// const result = isPalindrome3(1441)
const result = isPalindrome3(100)
// const result = isPalindrome3(-124421)
console.log(result);

// Chat GPT solution:
const isPalindrome4 = function(x) {
    if (x < 0) {
        return false;
    }

    let original = x;
    let reverse = 0;
    
    while (x > 0) {
        reverse = reverse * 10 + x % 10; // 10
        
        x = Math.floor(x / 10); // 1
    }

    return original === reverse;
};

// const result = isPalindrome4(101)
// const result = isPalindrome4(-124421)
// console.log(result);