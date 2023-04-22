function example() {
    console.log("This is a function");
}
console.log(this);
example();

function getFullName() {
    console.log(this);
    console.log("Outer getFUllname function() called ");
}

// What is 'this'?
// WHO is calling me


let person = {
    firstName: "Mayur",
    getFullName: function(name, lastname, count) {
        console.log("We are inside getFullName Function...");
        console.log(this);
        console.log(arguments);


        var getMyName = (name, lastname, count) => {
            console.log(this);
            console.log(arguments);
        }

        getMyName("May", "af", 97623);

    },
    getMyName: (name, lastname, count)=>{
        console.log(this);
        console.log(arguments);
    }
}

person.getFullName("Mayur", "S", 652);
//person.getMyName("Mayur", "S", 652);


function add (n, n) {
    console.log("Add function called....")
}
var obj = new add(); // contructible function
var obj2 = new add();

var subtract = () => {
    console.log("Subtract function called...");
}
subtract();
var obj3 = new subtract();

// JS Objects

// Difference between normal function and arrow functions 
// 1. Use of this keyword
// 2. Arguments binding
// 3. Constructible functions
// 4. Duplicate parameters


