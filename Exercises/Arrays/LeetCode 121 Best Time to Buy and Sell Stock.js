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

//What you want is to find a min and see how much profit you can find going in the future;
//Once another min is found, you start looking for profits from that moment onwards;
//This until you reach the end of the array

//You can use 2 pointers, left pointer (LP) and right pointer(RP);
//LP = when to buy
//RP = when to sell

//As you go along the array, you select a min. At this position we will keep our LP;
//As LP is fixed, we increase RP and check :
//- is RP is higher than LP? then it means we can make a profit, we calc it and check if
//it is higher than any previous profits; then we keep going with RP further in time;
//- is RP lower than LP? then it means we found a new minimum, the LP will be moved to
//this place and RP will start from there onwards as well;

//Stopping conditions:
//-the right pointer will always keep on going one step to the right of the right pointer till the end of the array
//-left pointer must stop one step before the end of the array ( no point to go till the very end);

const maxProfit = function (prices) {
  let maxProfit = 0;
  let currProfit = 0;

  let leftP = 0; //left pointer
  let rightP = leftP + 1; //right pointer

  while (rightP < prices.length || leftP <= prices.length) {
    //We stay in this loop until the pointer positions get beyond the stopping conditions;

    if (prices[leftP] < prices[rightP]) {
      currProfit = prices[rightP] - prices[leftP];
      maxProfit = Math.max(maxProfit, currProfit);
    } else {
      leftP = rightP;
    }

    rightP++;

    //We must return a profit here
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
