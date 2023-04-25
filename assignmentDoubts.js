console.log("=============================================");
console.log("=========Assignment Doubts===================");
console.log("=============================================");

var example = function () {
    console.log("Example function called...");
}

var e2 = function(param1) {
    console.log("e2 function called...");
}

e2();



var add = function(a, b) {
    // a = x; b=y;
    console.log("x: ", a);
    console.log("y: ", b);
    console.log("Add function called..");
    return (a+b);
}

var subtract = function(a, b) {
    // a = x; b=y;
    console.log("x: ", a);
    console.log("y: ", b);
    console.log("Subtract function called..");
    return (a-b);
}

var multiply = function(a, b) {
    // a = x; b=y;
    console.log("x: ", a);
    console.log("y: ", b);
    console.log("Multiply function called..");
    return (a*b);
}

// add();

// var x = 2;
// var y = 3;
// let r = 9;
// let t = 89;
// var sum = add(x, y); // add (2, 3);
// add(4, 5);
// add(r ,t); // add (9, 89);
// var sum1 = add([9,10], {key:"value", key2:"value2"});

// console.log(sum1);

// //============================================================
// var cbFunction1 = function() {
//     console.log("cbFunction1 called...");
// }
// var cbFunction2 = function() {
//     console.log("cbFunction2 called...");
// }

// var sum2 = add(cbFunction1, cbFunction2);
// console.log(sum2);
//============================================================


// We write calculate function.
// it will take another function as an argument.
// Inside calculate we will call this function (which is passed to it)
var calculate = function(a) {
    // a = add   or a = subtract
        var n1 = 23;
        var n2 = 24;
        var result = a(n1, n2);// add()
        console.log(result);
}

calculate(add); // a = add
calculate(subtract);
calculate(multiply);

