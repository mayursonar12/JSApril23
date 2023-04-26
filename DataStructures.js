// Array

var arr = [2, 3, 6, 8, 10];
console.log("Original array ", arr);

// Array functions in JS OOTB (Out of the box - they come in default package )
// Mutation of array? 
let arra1 = arr.push(78);
console.log("New Array: ", arr); // it mutates the array

// unshift?
// Does slice mutates (change) the (original) array?
var slicedArray = arr.slice(2);
console.log(slicedArray);
console.log(arr);

// join
var words = ["M", "A", "Y"];
let newWord = words.join('');
console.log(words.join(''));
console.log(words);
console.log(newWord);

// split
var sentence = "MAYUR";
var newSenetcnce = sentence.split("");
console.log(sentence);
console.log(newSenetcnce);

// Write a function which takes a sentance as an input
// example: my name is mayur
// output: My Name Is Mayur

// Arrays: data is stored at index location
// var arr = [2,3,4,5] , []
// arr[2];
// arr['second']
var myArray = new Array();
console.log("myArray: ", myArray)
var myArr = [];


// Maps is to storing 
// key : value
// 
// 'second': 4
var myMap = new Map();
console.log(myMap);
myMap.set('second', 4);
myMap.set('third', 78);
myMap.set('name', 'Mayur');
console.log(myMap);
console.log(myMap.entries());
console.log(myMap.values());

// Set 
var mySet = new Set();
console.log("mySet: ", mySet);
mySet.add('second');
mySet.add('third');
mySet.add('second');
mySet.add('second');
mySet.add('second');
mySet.add('second');
console.log(mySet);

// Question: Given an array with some duplicated elements,
// Output expected: Remove all the duplicate elements and keep unique entries
// Example: input array = [2,4,5,6,2,9,4,2,7]
// Expected output = [2,4,5,6,9,7]
var e_arr = [2,4,5,6,2,9,4,2,7];
var myUniqueElemSet = new Set();
e_arr.forEach(elem => {
    myUniqueElemSet.add(elem);
})
console.log("myUnique Elements Set: ", myUniqueElemSet);

//e_arr.sort(compareFunction);

// Time Complexity
// 1, n, nlogn, n*n, n*n*n

//
// created a new empty uniqueArray
// Iterting over the given array elemnts
// Checked if the element is present in uniqueArray


// Sorting. Merge Sort with timeCpmplexity (Read this and come back with doubts)
// To implement internal sort function (with comparator) on an Array //e_arr.sort(compareFunction);

// 


// 

//
function foo() {
    if(false) {
        let my_var = "Hello World..!";
    }
    console.log(my_var);
}
foo();
//

////
//=====================
var callbkFunc = function () {
    console.log("callback function called");
}
//callbkFunc();

var forEach = function (calbak) {
    
    ///
        // This code here will fetch the filter results for you

    ///
    var sale = 50;
    if (sale == 50) {
        calbak(); // showUI
    } else {
        console.log("SOrry No sale at IKEA...")
    }
}

forEach(callbkFunc);
//======================

// Why we are not calling the callbkFunc function directly, 
// instead we pass it to some other function, and then call it from another function

// Functions as first class objects in JS
// Pasing functions to another functions in JS (Higher order functions)
