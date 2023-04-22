// function first () {
//     console.log("Hello World..");
// }

// first();

// Hoisting

console.log(a);
var a = "Hello World..!";
console.log(b);
var b = function() {
    console.log("b function called..");
}

// 
console.log(v);
var v;
console.log(v);
v = "Hello World";
console.log(v);

// output
// 1.  error

var test = 20;
var add = function () {
    var x = 10;

    console.log(x);

    var innerfunction = function() {
        var m = 9;
        console.log("Inner function");
    }
    innerfunction();
}
//console.log(x);
add();
console.log(this);


// Execution context
var e1 = function () {
    console.log("e1 called");
}

var e2 = function () {
    e1();
}
e2();

// var, let and const
// In context of HOISTING
console.log(m);
var m;

// Scope

let v1 = 10;
console.log(v1); // 10, undefined

function outer() {
    //var v1 = 20;
    console.log(v1); // 20

    function inner () {
        console.log(v1);
    }
    inner();
}
outer();
console.log(v1); // 10, undefined




