/**
 * A web developer needs to know how to design a web page's size. So, given 
 * a specific rectangular web page’s area, your job by now is to design a 
 * rectangular web page, whose length L and width W satisfy 
 * the following requirements:
 * 
 * The area of the rectangular web page you designed must equal to the given target area.
 * The width W should not be larger than the length L, which means L >= W.
 * The difference between length L and width W should be as small as possible.
 * Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.
 * 
 * @param {number} area
 * @return {number[]}
 */

function constructRectangle(area) {
    let width = Math.sqrt(area);
    let length = width;
    if (width % 1 === 0) {
        return [length, width]
    }
    width = Math.floor(width);
    for (let i; i >= 1; i--) {
        length = area / i;
        if ( length%1 === 0) {
            console.log(length, width);
        }
    }
    return [length, width]
};

const result = constructRectangle(17)
console.log(result);

