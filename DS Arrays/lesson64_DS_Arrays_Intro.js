const strings = ['a','b','c','d'];

console.log(strings[2]);// Just looking up a value based on index is instant, so
//time complexity for retrieving a data is O(1);

//push ( adding an element to the end of the array)
strings.push('e');//because it just adds it at the end of the array, it will be an O(1),
//as we will not loop it;

//pop  ( the oposite of push, will remove the last item)
strings.pop();// O(1) - cause we are not looping anything

//unshift ( adding an elem at the beginning of the array)
strings.unshift('x');// O(n) as you have to shift to the right all the existing 
//numbers to the right, as the index 0 will be the new added value. As we iterate
//then we have O(n)

//splice (changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice() ); This will 

strings.splice(2,0,'alien');// After index 2 ( not including it), remove the next 0 //elements and add 'alien' after it ( after index 2 in this case); 
//as you have to iterate to change the indexes for the other cases, again O(n)



// So you can see that different methods of Array will give you different time complexities
//but to know it, just think what happens in the background;

console.log(strings);