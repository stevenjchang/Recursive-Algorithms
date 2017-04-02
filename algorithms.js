///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

var countVowels = function(str){
    var count = 0;
    var vowels = /[aeiou]/;
    
    var recurse = function(str){
      if (str.length <= 0){
        return;
      }
      if (str[0].match(vowels)){
        count++;
      }    
      if (str.length > 0){
          recurse(str.slice(1));
      }
      return count
    }
    recurse(str);
    return count;
};

var sample = 'ababa';
countVowels(sample);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n){
    var num = n.toString();
    var numLength = num.length;

    if (numLength === 1){
        return n;
    } else {
        return Number(num[0]) + Number(recursiveSum(num.slice(1)));
    }
};

//second version
var recursiveSum = function(n){
    var num = n.toString();
    var numLength = num.length;
    var firstNum = Number(num[0]);
    var restOfNums = num.slice(1);
    
    if (numLength === 1){
        return n;
    } else {
        return firstNum + Number(recursiveSum(restOfNums));
    }
};

recursiveSum(1234);

//input: a integer
//output: returns a number

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n){
    if (n < 2 || n % 2 !== 0){
        return false;
    } else if (n / 2 === 2){
        return true;
    } else {
        return isPowerOfTwo(n / 2);
    }
};

isPowerOfTwo(256);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

var invest = function(amount, rate, years){

    if (years === 0){
        return amount;
    } else {
        return invest(amount + (amount*(rate/100)), rate, years -1);
    }

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){
    var counter = min;
    var goBackwards = false;
    console.log(counter);

    if (counter === max){
        goBackwards = true;
        // console.log('goBackwards', goBackwards)
    }

    if (counter < max && !goBackwards){
        printRangeUpDown(counter + 1, max)
    } 
    else if (goBackwards){
        console.log('counter in else', counter);
        printRangeUpDown(min, counter -1);
    }

};

printRangeUpDown(2,4);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

var binaryTreeSum = function(tree){

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){

};