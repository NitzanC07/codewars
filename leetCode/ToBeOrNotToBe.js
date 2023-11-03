/**
 * https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * @param {string} val
 * @return {Object}
 */

const expect = function(val) {
    return {
        toBe: (v) => {
            if (v === val) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (v) => {
            if (v !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};


console.log(expect(5).toBe(null))

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */