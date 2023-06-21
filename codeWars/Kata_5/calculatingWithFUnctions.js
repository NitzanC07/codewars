/** Calculating with functions
 * 
 * This time we want to write calculations using functions and get the results. 
 * Let's have a look at some examples:
 * 
 * seven(times(five())); // must return 35
 * four(plus(nine())); // must return 13
 * eight(minus(three())); // must return 5
 * six(dividedBy(two())); // must return 3
 * 
 * Requirements:
 * There must be a function for each number from 0 ("zero") to 9 ("nine")
 * There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
 * Each calculation consist of exactly one operation and two numbers
 * The most outer function represents the left operand, the most inner function represents the right operand
 * Division should be integer division. For example, this should return 2, not 2.666666...:
 * 
 * eight(dividedBy(three()));
 */




const numAndArt = {
    x: 0,
    artimetic: ""
}

const calculation = (n) => {
    numAndArt.x =   numAndArt.artimetic === "+" ? n + numAndArt.x : 
                    numAndArt.artimetic === "-" ? n - numAndArt.x :
                    numAndArt.artimetic === "*" ? n * numAndArt.x :
                    numAndArt.artimetic === "/" ? Math.floor(n / numAndArt.x) : "";
    return numAndArt;
} 

const checkFirstOrSecondNumber = (n) => {
    if (numAndArt.artimetic) { 
        return calculation(n).x 
    } 
    else { 
        numAndArt.x = n;
        return numAndArt;
    }
}


function zero() {
    return checkFirstOrSecondNumber(0)
}
function one() {
    return checkFirstOrSecondNumber(1)
}
function two() {
    return checkFirstOrSecondNumber(2)
}
function three() {
    return checkFirstOrSecondNumber(3)
}
function four() {
    return checkFirstOrSecondNumber(4)
}
function five() {
    return checkFirstOrSecondNumber(5)
}
function six() {
    return checkFirstOrSecondNumber(6)
}
function seven() {
    return checkFirstOrSecondNumber(7)
}
function eight() {
    return checkFirstOrSecondNumber(8)
}
function nine() {
    return checkFirstOrSecondNumber(9)
}

function plus() {
    numAndArt.artimetic = "+"
    return numAndArt;
}
function minus() {
    numAndArt.artimetic = "-"
    return numAndArt;
}
function times() {
    numAndArt.artimetic = "*"
    return numAndArt;
}
function dividedBy() {
    numAndArt.artimetic = "/"
    return numAndArt;
}

const result = five(plus(four(numAndArt)));
console.log("END", result);