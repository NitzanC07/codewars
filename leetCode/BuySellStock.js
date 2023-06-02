/**
 * Best Time to Buy and Sell Stock
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve
 * any profit, return 0.
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5 
 * Explanation: Buy on day 2 (price = 1), and sell on day 5 (price = 6).
 * 
 * Example 2:
 * Input: prices = [5, 4, 2]
 * Output: 0
 * 
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
    
    let profit = 0;

    for (let buyingDay = 0; buyingDay < prices.length-1; buyingDay++) {
        for (let sellingDay = buyingDay+1; sellingDay < prices.length; sellingDay++) {
            if (prices[sellingDay] - prices[buyingDay] > profit) 
                profit = prices[sellingDay] - prices[buyingDay]
            }
        }
    return profit;
}

const result = maxProfit([7, 2, 5, 6]);
console.log(result);