
// Here in this file, we will maintain a list of all those functions which are commonly used by any application

function myFetchJsonService(url) {
    return new Promise ( function(resolve, reject) {
        // Write my own logic here

        fetch(url)
        .then((response) =>  response.json() )
        .then((json) => {resolve(json)})
        .catch((errmsg) => {reject(errmsg)})
        // If my logic is good, I should call resolve 


        // Else if my logic is not good, I can call reject
    })
}

var serviceUser = "Tom";


