// Variable access
//  Any variable which we use in our project, can have 2-3 types ofaccess
// Public, Protected, Private
//
// In C++
// class Car {
//     private: 
//         String carName;

//     public:
//         int noOfWheels;
// }

// Score
// ----------

// function greet () {
//     var func = function() {
//         console.log("Inner function");
//     }

//     return func;
// }

// var e1 =  greet();    // Inner function
// e1(); 

//======================================================================================
// Closures will exist when a function returns a function AND
//  When the inner function which is being returned, uses a variable of outer function.
//======================================================================================


//var count = 10;

function greet (name) {
    //console.log(name);
    var count = 10;

    return ( function() {
            console.log(name);
            console.log(count);
            console.log("Inner function");
        }
    )   
    //return func;
}

var e1 =  greet("Tom");    // Inner function
//
e1(); 


// Here the outer function is IIFE, and it returns the inner function and stores in add variable
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();

add();



// Web APIs
// SetTimeout is a web api
for (var  i =0; i < 5; i++) {
    // var func = () => {
    //     console.log("This is from settimeout number: ", i);
    // }

    setTimeout(() => {
        console.log("This is from settimeout number: ", i);
    }, 3000);

    //setTimeout(arg1, arg2)
}


    

