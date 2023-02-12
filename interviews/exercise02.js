/** 
 * Simplify the implementation below as much as you can.
 * Even better if you also improve performance as part of the simplication.
 * FYI: This code is over 35 lines and over 300 tokens, but it can be written in 5 lines and in less than 60 tokens.
*/

// ‘a’ and ‘b’ are single character strings
function func(s, a, b)
{
    var match_empty=/^$/ ;
    if (s.match(match_empty))
    {
        return -1;
    }
    else
    {
        var i=s.length-1;
        var aIndex=-1;
        var bIndex=-1;
        while ((aIndex==-1) && (bIndex==-1) && (i>=0))
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
        	if (s.substring(i, i+1) == b)
                bIndex=i;

        	i--;
        }

        if (aIndex != -1)
        {
            if (bIndex == -1)
                return aIndex;
        	else
                return Math.max(aIndex, bIndex);
        }
        else
        {
            if (bIndex != -1)
                return bIndex;       
	      else
                return -1;
        }
    }
};

// My Solution

/**  
 * The function func get 3 arguments type string.
 * Return value type number.
 * if s contain empty string return -1
 * func checks which of two characters in a and b is bigger index of string s.
 * return the last character from both.
 * if just one character include in s, so the function return the character.
 * if no one include in s the function return -1.
*/

function func1(s, a, b) {
    const aIndex = s.lastIndexOf(a);
    const bIndex = s.lastIndexOf(b);
    if (aIndex > bIndex) {
        return aIndex;
    } else {
        return bIndex;
    }
}

// Usage
const s = "abcdefg";
const a = "c";
const b = "x";
console.log(func(s, a, b));
console.log(func1(s, a, b));

