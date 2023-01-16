/** 
 * Function solution get 1 array length 3-7 elemnts type string.
 * Function solution return value type boolean.
 * 
 */ 

function solution(words) {
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            const wordLen = words[j].length
            if (i !== j && words[i][0] === words[j][wordLen - 1]) {
                console.log(`i=${i} ${words[i]} \t j=${j} ${words[j]}`);
                words.pop(words[j])
                words.pop(words[i])
            }
            break;
            
        }
    }

    return true;
}

console.log(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]), true);
console.log(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]), false);
