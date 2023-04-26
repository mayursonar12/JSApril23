// By Value
// These a and b are global variables
var a = 9;
var b = 10;

//a=b;
console.log("-----------Before swap call....-------");
// These a and b are global variables
console.log("a: ", a);
console.log("b: ", b);

// // a = b;
// function e1() {
//     // These a and b are global variables
//     a = b;
// }
// e1();

function e2(x, y) {
    // AT start: x = a = 9, y = b = 10
    // These x and y are local to only the function scope
    x = y;

}
e2(a, b);

// function swap(a, b) {
//     // at start : a = 9, b = 10
//     var temp = a; // temp = 9
//     a = b; // a  = 10
//     b = temp; // b = 9
    
//     console.log("-----------Inside swap call....-------");
//     console.log("inside function: a: ", a);
//     console.log("inside function: b: ", b);
//     // at end: a = 10, b =9
// }
// swap(a, b);

console.log("-----------After swap call....-------");
// These a and b are global variables
console.log("a: ", a);
console.log("b: ", b);

// 
var n1 = 10;
var n2 = 20;

n1 = n2; // n1 = 20; n2 =20

n1 = 30;

console.log(n1);
console.log(n2);



//

var person = {
    firstName : "Sam",
    lastName: "Walter"
}
var person2 = {
    firstName : "Tom",
    lastName: "Walter"
}

var person2 = person;

console.log("Before-------------")
console.log(person); // Sam
console.log(person2); // Sam

person2.firstName = "Tom";

console.log("After-------------")
console.log(person); // Sam
console.log(person2); // Tom



function setName (p) {

    var newPerson = p;
    newPerson.firstName = "NewPersonName";
    // Here p is not a local variable of this function scope
    //p.firstName = "Tony";

    //return person;
}

setName(person2);
console.log("After setName---------")
console.log(person);
console.log(person2);


