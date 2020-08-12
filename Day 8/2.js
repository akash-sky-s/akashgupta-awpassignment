// Array Fundamental

// ARRAY FUNDAMENTAL

//Declare an Array;
let arr = [];

let arr = [1, 2, 3];
let arr = ['A', 'B', 'C'];
let arr = [1.1, 2.2, 3.3];

//Mixing the data type is possible;
let arr = [1, 'A', 3.14, true];

// We can also add Annonymous functino or Arrow Functions in the array.
// More Complex Mixed Data Type.
let arr = [1, "A", 3.14, true, () => { }, 11, function () { }];

// How to access any element in Array.
// Using Index
// Index start with 0
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
// lets access first element
let firstItem = arr[0]; // Tejas
let anyItem = arr[3]; // Umesh

// Various replace,add and remove
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];
// Add a new value to end of the array
arr.push("Sanam");
// Remove a value from the end of the array
arr.pop();
// Can we update value at certain index
arr[0] = "Tejasss";

// Case - 7
// Can we add an element at particular index
// splice - this can be used to add an elemnt at certain index without replcing
// splice - this can also be used to remove/delete an element from certain index
// splice - it takes three parameter ()
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"]; // before
arr.splice(2, 0, "sanam");
let arr = ["Tejas", "Sachin", "Sanam", "Omkar", "Umesh", "Yaminee"]; // after

// delete at index 4, second parameter is deleteCount
arr.splice(4, 2);

