/** 
 * Implement function verify(text) which verifies whether parentheses within text are correctly nested. 
 * You need to consider three kinds: (), [], <> and only these kinds.
 * 
 * Examples:
 * verify("---(+++)---")    >> 1
 * verify("")               >> 1
 * verify(")(")             >> 0
 * verify("<(   >)")        >> 0
 * verify("(<> () [] <> )") >> 1
 * verify("   (   [ ) ")    >> 0
*/

// My Solution

// verify is a function
//	 Get 1 argument type string
// 	If parenthese opening it needs to close later.
//	If two kinds of parentheses opening they need to close from the last to first.
//	If closing parenthesis is in same kind of the last opening parenthesis is valid.
// 	Return value type number 0 (if false) or 1 (if true).

function verify(sampleString) {

    let parenthesesMemory = ''
    const chars = sampleString.split('');
    chars.forEach((p) => {
        if (p === '(' || p === '[' || p === '<') {
            p === '(' ? parenthesesMemory += ')' : p === '[' ? parenthesesMemory += ']' : parenthesesMemory += '>';
        } else if (p === ')' || p === ']' || p === '>') {
            if (p !== parenthesesMemory[parenthesesMemory.length -1]) {
                return false;
            } else {
                parenthesesMemory = parenthesesMemory.slice(0, parenthesesMemory.length-1)
            };
        }
    })
    if (parenthesesMemory !== '') {
        return false;
    } else {
        return true;
    }
} 

function verify2(sampleString) {
    const parentheses = [
        { open: '<', close: '>' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '{', close: '}' }
    ]

    let parenthesesMemory = '';
    const chars = sampleString.split('');
    for (let c = 0; c < chars.length; c++) {
        for(let p = 0; p < parentheses.length; p++) {
            if (chars[c] === parentheses[p].open) {
                parenthesesMemory += parentheses[p].open
            }
            if (chars[c] === parentheses[p].close) {
                if (parenthesesMemory[parenthesesMemory.length-1] === parentheses[p].open) {
                    parenthesesMemory = parenthesesMemory.slice(0, parenthesesMemory.length-1)
                } else {
                    return false;
                }
            }
        }
    }
    if (parenthesesMemory) {
        return false;
    }
    return true;
}

// Usage:
const strings = [
    "---(+<>++)---",
    "",
    "before ( middle []) after ",
    "<(   >)",
    "(  [  <>  ()  ]  <>  )",
    "   (      [)",
    "(>)",
    "(  <{} > )",
    "["
]

strings.forEach((st, i) => {
    console.log(`Test ${i+1}\ninput: ${st}\nOutput: ${verify2(st)}`);
})