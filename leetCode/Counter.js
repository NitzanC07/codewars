/**
 * Given an integer n, return a counter function. This counter function initially
 * returns n and then returns 1 more than the previous value every subsequent time
 * it is called (n, n + 1, n + 2, etc).
 * 
 * Example 1:
 * Input: 
 * n = 10 
 * ["call","call","call"]
 * Output: [10,11,12]
 * Explanation: 
 * counter() = 10 // The first time counter() is called, it returns n.
 * counter() = 11 // Returns 1 more than the previous time.
 * counter() = 12 // Returns 1 more than the previous time.
 * 
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = (n) => {
    return function (sign) {
        sign === "+" && n++;
        sign === "-" && n--;
        return n;
    };
};

const counter = createCounter(0)

const btnPlus = document.querySelector('.btn-plus')
const btnMinus = document.querySelector('.btn-minus')
const countLabel = document.querySelector('.count-label');

btnPlus.addEventListener('click', () => {
    countLabel.textContent = counter("+");
})

btnMinus.addEventListener('click', () => {
    countLabel.textContent = counter("-");
})
