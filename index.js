// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
//-------------------------------------------------------------------------------------------------

//As we iterate through the array, we can keep on looking and storing the min and max values and their position;
//But, in order to have a profit, we need to posMin <

const maxProfit = function (prices) {
  let valMin = prices[0];
  let valMax = prices[0];

  //posMin must be to the right of posMax, so posMin > posMax
  let posMin = 0;
  let posMax = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > valMax) {
      valMax = prices[i];
      posMax = i;
    }

    if (prices[i] < valMin) {
      valMin = prices[i];
      posMin = i;
    }
  }

  console.log(
    `Max= ${valMax} at index ${posMax} || Min= ${valMin} at index ${posMin}`
  );
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

// posMax must be smaller than posMin
// profit = valMax - valMin...you can create a "profit" variable and get the biggest of all;
