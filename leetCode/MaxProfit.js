/** 
 * Best time to buy and sell stock
 * Leet Code: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. 
 * If you cannot achieve any profit, return 0.
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * 
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 * 
 * @param {number[]} prices
 * @return {number}
 */

// Solution with time complexity of O(n^2).
const maxProfit01 = function(prices) {
    let profit = 0;
    // for loop for search the best day to buy.
    for (let b = 0; b < prices.length; b++) {
        
        // for loop for search the best day to sell.
        for (let s = b+1; s < prices.length; s++) {
            let cp = prices[s] - prices[b]
            if (cp > profit) {
                profit = cp
            }
        }
    }
    return profit;
}

// Solution with time complexity of O(n).
function maxProfit02(prices) {
    let profit = 0;
    let buyPrice = prices[0];
    
    for (let i = 0; i < prices.length; i++) {
        let currentProfit = prices[i+1] - prices[i];
        if (currentProfit > 0) {
            if (prices[i] < buyPrice) {
                buyPrice = prices[i]
            }
            if (prices[i+1] - buyPrice > profit) {
                profit = prices[i+1] - buyPrice
            }
        }
    }
    return profit;
    }

    const maxProfit03 = (prices) => {
        return prices[0]
    }


// const result = maxProfit02([7, 1, 5, 3, 6, 4])
// const result = maxProfit02([7, 6, 5, 4, 2, 1])
const result = maxProfit02([3, 2, 4, 8, 1, 6]);
console.log(result);