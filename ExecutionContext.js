// 27 April

// Closures

function outer1 () {
    var num = 10;

    function inner1() {
        var num2  = 20;
        return num2;
    }
    var j = inner1();
    return j;   // 20
}

var i = outer1();

//console.log(i);



function outer () {
    var num = 10;

    function inner() {
        var num2  = 20;
        return num2;
    }
    return inner;
}

var i = outer();
console.log(i);



/// Statements

// 1. Write a function which returns a function
// 2. 


function vehicle () {
    function car() {

    }
    return car;
}

///===================
var num = 10;

console.log(num);

function fun(){
    //console.log(num);
    var num = 20;
    num++;
    console.log(num);
    if(num){
        var num = 30;
        let num1 = 90;
        num++;
        console.log(num);
    }
    console.log(num);
}

fun();

console.log(num);

console.log("========================");

let arr = [2,3,4,5,6];

function fun1(arr){
    arr.unshift(1); 
    console.log(arr);
    let newArr = [7,8,9];
    arr = newArr;
    arr.unshift(1);
    console.log(arr);
}

console.log(arr);
fun1(arr);
console.log(arr);


console.log("========================");

let arr1 = {
    name: "Tom"
};

function fun2(arr1){
    //arr1.unshift(1); 
    console.log(arr1);
    let newArr = {
        lastname: "Hank"
    };
    //arr1 = newArr;
    arr1.name = "Mayur";
    //arr1.unshift(1);
    console.log(arr1);
}

console.log(arr1);
fun2(arr1);
console.log(arr1);


