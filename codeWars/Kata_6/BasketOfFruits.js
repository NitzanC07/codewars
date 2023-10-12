/** 
 * There are 6 types of fruits in the basket: Apples, Pears, Oranges, Lemons, Bananas and Tomatoes.
 * Your task: given a total number of fruits as an argument (always positive), 
 * return the highest possible number of Bananas, while following ALL the rules below:
 * 
 * There are 17 more Oranges than Apples.
 * There are 40% less Pears than Oranges.
 * There are 5/6 more Lemons than Pears.
 * There are 3x less Apples than Bananas.
 * 
 * There might be some Tomatoes left in the basket after you sort them (we dont want the 
 * Tomatoes, people think they are vegetables and it gets confusing).
 * If there are not enough total fruits to follow the rules, return "false".
 * All fruits must ALWAYS be counted as whole numbers.
 */

function countBananas(total) {
    const fruits = {
        apples: 0,
        pears: 0,
        oranges: 0,
        lemons: 0,
        bananas: 0,
        tomatos: 0
    }
    
    fruits.oranges = fruits.apples + 17;
    fruits.pears = fruits.oranges * 0.6;
    fruits.lemons = fruits.pears * (11/6);
    fruits.apples = fruits.bananas / 3;


    console.log(fruits);
}

const result = countBananas(81);
console.log(result);