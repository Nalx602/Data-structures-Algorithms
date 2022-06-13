//      Recursion Theory

//A recursion function is a function which calls itself in its body, like below;
//It is good for repeated subtasks; it is used for searching and sorting algorithms;

// function inception(){
//     inception();
// }

//As the function keeps on calling itself, you might end up in an infinite loop
//where there is no stopping the recursion ( repeated tasks) and the operating system
//will go into "stack overflow"; the stack will notice the function keeps calling itself but there
//is nothing popping out of the stack from the previously already called function;

//Every recursive function must have a so called "Base case" or "stop point";
//How to tell the fct when to stop? We can add a counter or a flag and control it by manipulating
//the counter or flag;

// let counter = 0;
// function inception(){
//   if(counter>3){
//     return "done";
//   }
//   counter++;
//   inception();
// }
// console.log(inception());

//In above case, we have the "Base case" as being counter = 4; when counter will reach 4, the 
//"if" statement is reached and we should get the string "done"; 
//but this does not happen and we get "undefined" instead ! Why?
//Well, if you think about it, it is as if you run the code below:
//inception(inception(inception(inception())))
//                                 ^ this inception() will return "done", so it is like:
//inception(inception(inception("done")));

//But there is no interpretation for inception("done"); what you have actually done is 
//you stacked 4 x "inception" functions, the top-most-one has returned "done" and popped;
//but the other ones, when executing in sequence, don't run into the "if" statement;
//What is the issue ? Well, the function "inception" does not return anything unless it is in 
//the base case, otherwise it just runs itself and does not do anything else;
//So each recursive step needs to also return something;

// let counter = 0;
// function inception(){
//   if(counter>3){
//     return "done";
//   }
//   counter++;
//   return inception();
// }
// console.log(inception());

//Above, at the end of the function body we added "return inception();" ; In this way, the 4th inception
//returns "done"...the 3rd inception comes with its local variable "counter =3" ( "if" statement is not gonna run)
//but it will return the 4th inception ( equal to "done")...then the 2nd inception comes etc. ...and the 
//result from 4th inception keeps on bubbling up;

//Below pseudocode
// function inception(){
//   "if"  skipped
//   counter = 1;
//   return  inception(){
//     "if"  skipped
//     counter = 2;
//     return  inception(){
//       "if"  skipped
//       counter = 3;
//       return  inception(){
//         "if"  skipped
//         counter = 4;
//         return  inception(){
//           "if"  true
//           return "done";
//           }
//         }
//       }
//     }
// }  

// RULES!
//1. Identify the base case
//2. Identify the recursive case
//3. Get closer and closer and "return" when needed; usually we have 2 x "return", one for
//the base-case and one for the recursive case;

//Note: it is good to always imagine how the stack will look when you create a recursive function and how
//it will get inceptionized ( function in function in function.... and so on)