
let counter = 0;
function getData() {
    console.log("Get data called....", counter++);
}

const betterFunction = debounce(getData)


// What is the magic to be performed?
// We want to introduce a delay to call getData function
function debounce(getData) {
    let timerID;
    return function() {
        clearTimeout(timerID);

        timerID = setTimeout(()=>{
            getData();
        }, 3000)   
        
    }
    
}

