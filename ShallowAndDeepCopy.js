

var person = {
    firstName : "Sam",
    lastName: "Walter",
    personalDetails: {
        address: "USA",
        areaCode: "123456",
        phone: "+190828387"
    }
}

// Now we want to create a new obnject which shoudl NOT point to the same ref
// Instead we need a separate copy

// First way : Using spread operator

var person2 = {...person};

console.log("======= Before=====");
console.log(person);
console.log(person2);

person2.firstName = "Tom";
person2.personalDetails.address = "India"

console.log("======= After=====");
console.log(person);
console.log(person2);

// Here the nested objects like 'personalDetails' are still copied by reference


// Second Way: Using Object.assign()

var person3 = Object.assign({}, person);
console.log("Person3: ", person3);

person3.firstName = "ChangedByPerson3";
person3.personalDetails.address = "FRANCE";

console.log("======= After Change by Person 3 =====");
console.log(person);
console.log(person3);


// Third way: JSON stringify and parse
// JSON.stringify converts the object into String
// console.log(JSON.stringify(person));
var personString = JSON.stringify(person);
console.log(personString);

var person4 = JSON.parse(personString);
console.log(person4);

person4.firstName = "ChangedByPerson4";
person4.personalDetails.address = "addressChangedByPerson4";

console.log("======= After Change by Person 4 =====");
console.log(person);
console.log(person4);
