//Having an array of numbers, we need to check if the sum of any 2 elements are 
//equal to a provided sum

// def a function which will take 2 inputs, one is the unsorted array, the other is the sum

//In order to go through the array only once, you start from the 2nd elem up to the last one 
//in a "for" loop; each time you add the previous element's compliment as a property to
//an object with value "true";

//[1,2,3,9] and sum=8
//So you will start at elem 2; you will take previous elem and do its compliment, meaning
//8-1=7; now the compliments Object = {'7':true};
//In next step, the compliments array ={'7':true, '6':true};
//So you can see, if the current elem will be a 7 or a 6, then we know we will have 2 numbers
//which will add to our sum;
const checkPairEqualSum = function( arr, sum) {
  let compliments = {};

  for(let i=1;i<arr.length;i++){//starting from 2nd elem
    el=sum-arr[i-1];
    compliments[el]=true;//adding the compliment to our Object
    if (compliments[arr[i]]) return true;// if our Object has a property= our current arr[i]
    //then we found 2 numbers adding to sum
  }
}

myArray = [1,2,6,9];
mySum= 8;

console.log(checkPairEqualSum(myArray, mySum));


