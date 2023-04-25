// function example() {
//     console.log("This is a function");
// }
// console.log(this);
// example();

// function getFullName() {
//     console.log(this);
//     console.log("Outer getFUllname function() called ");
// }

// What is 'this'?
// WHO is calling me


let person = {
    firstName: "Mayur",
    // Normal function inside object
    getFullName: function(name, lastname, count) {
        // this trick helps to overcome the problem of JS
        var me = this;
        var that = this;
        var self = this;
        var m1 = this;

        console.log("========================================");
        console.log("We are inside getFullName Function...");
        console.log(this);  // person obj
        console.log(arguments);

        // Arrow function inside normal function
        var getMyName = (name, lastname, count) => {
            console.log("- - - - - - - - - - - - - - - -")
            console.log("Inner Arrow function...")
            console.log(this); // person obj
            console.log(arguments);
        }

        // Normal function inside normal function
        function normalInnerFunction(name, lastname, count) {
            console.log("- - - - - - - - - - - - - - - -")
            console.log("Inner Normal function...")
            console.log(this); // window obj ----- (this is a kind of bug)
            console.log(that); // person obj
            console.log(arguments);
        }

        // Now we will call both the inner functions
        getMyName("Sam", "Walter", 100);
        normalInnerFunction("Sam", "Walter", 100);

    },
    getMyName: (name, lastname, count)=>{
        console.log("========================================");
        console.log("We are inside getMyName Function...");
        console.log(this);
        console.log(arguments);
    }
}

person.getFullName("Mayur", "S", 652);
person.getMyName("Mayur", "S", 652);


// function add (n, n) {
//     console.log("Add function called....")
// }
// var obj = new add(); // contructible function
// var obj2 = new add();

// var subtract = () => {
//     console.log("Subtract function called...");
// }
// subtract();
// var obj3 = new subtract();

// JS Objects

// Difference between normal function and arrow functions 
// 1. Use of this keyword
// 2. Arguments binding
// 3. Constructible functions
// 4. Duplicate parameters

// URL: https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256



