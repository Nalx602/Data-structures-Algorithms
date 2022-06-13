// Recursive VS Iterative

//Anything you can do with recursion you can do it with loops;
//Recursion though can result at implementing less code ( DRY principle);


//        Recursion
// Pro: DRY , Readability
// Cons: Large Stack


//      When to use recursion?
//I good idea is to use recursion when you have to go through data structures
//that you do not know how long and deep they are...like trees;

//Very used in searching... like BFS + DFS Searching
//Also very used when doing sorting;

//Every time we're using a tree or converting something into a tree, consider recursion.
//And there's three key things in an interview question that might trigger a recursive solution.

// 1. Is that a problem can be divided into a number of sub problems (divide and conquer) that are smaller instances
//of that same problem, such as the exercises we've done with Fibonacci numbers or factorial, we can break those
//down into little trees that break down to smaller and smaller pieces.
// 2. Another factor is that each of these calculationsthat we need to do are pretty much the same.
// 3. If you solve the smaller problems( the leaf nodes of that tree) and you combine them, that solves 
//the problem at hand, then that is a recursive solution that you can use and you'll see a lot of divide and conquer using recursion.
