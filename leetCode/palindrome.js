const isPalindrome = function(head) {
    for(let i = 0; i <= Math.floor(head.length / 2); i++) {
        if(head[i] !== head[head.length -1 -i]) {
            return false;
        }
    }
    return true;    
};

console.log(isPalindrome([4, 5, 5, 4]));