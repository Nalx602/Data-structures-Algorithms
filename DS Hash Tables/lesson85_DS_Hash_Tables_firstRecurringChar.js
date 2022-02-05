//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input) {
  // check for correctness of the input
  if (!Array.isArray(input)) return 'Invalid data';;
  if (input.some(isNaN)) return 'Invalid data';

  //simple way: take each item, put it in 2nd array; go to the next item
  //and check if it is in ; if not add it also ; go to to the 3rd item
  //and check if it exists in the 2nd array etc; once an item is found
  //in 2nd array, you return it ...but this is slow...you need to go through the
  //1st array and then, for each elem, go through the 2nd array -> O(n^2)

  //other way: hash tables; take first elem and add it to a hash table ( an object);
  //the elem = one of object's property & value='true'; -> O(n)
  //from the 2nd elem, always check if the propery exists already - O(1)
  //so it should be O(n)
  let hashTable = {};
  hashTable[input[0]]=true;

  for(let i=1;i<input.length;i++){
    if (hashTable.hasOwnProperty(input[i])) return input[i];
    hashTable[input[i]]=true;
  }

  //In case we pass the above test, then all elem are unique
  return undefined;
}



console.log(firstRecurringCharacter( [2,5,5,2,3,5,1,2,4] ));
