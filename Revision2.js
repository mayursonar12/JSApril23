
// The node js provides us with Timer module
// setTimeout, setInterval, setImmediate

console.log(" Before setTimeout...");

// SetTimeout is about callback functions.
// When we want to have set of instructions to be executed after some delay
// Then instead of executing inline with other code,
// We put those lines of code inside our callback function (given to setTimeout)

// setTimeout(()=>{
//     // Here we put those set of instrcutions, which we want to execute after some delay
//     console.log("Executing from setTimeout 1..");
    
// }, 0);

//==============================
// Promise.resolve().then(()=>{
//     console.log("Promise resolved....");
// })

// Promise.reject().catch(()=>{
//     console.log("Promise rejected...")
// })
//================================
// let promise1 = new Promise((resolve, reject)=>{
//     // Any logic

//     // if your logic is satisfied
//     if (1 ==1 )resolve();

//     else reject();
// })

// promise1.then(()=>{
//     console.log("My promise is success/fulfilled")
// })

// promise1.catch(()=>{
//     console.log("My promise is rejected...")
// })

// setTimeout(()=>{
//     // Here we put those set of instrcutions, which we want to execute after some delay
//     console.log("Executing from setTimeout 2..");
    
// }, 2000);

let arr = ["Apple", "Banana", "Oranges"];
for (var i =0 ; i < 3 ; i++ ){
    setTimeout(()=>{
        console.log("index value: ", i);
        console.log(arr[i]);
    }, 2000);    
}

console.log(" After setTimeout...");





