//JSON

// Rule-1, It starts and ends with curly braces;
let ref = {};

// Rule - 2,
// it consit of set of properties
// properties are declared in KEY VALUE PAIR.
// Syntx for the KEY VALUE PAIR (KEY : VALUE)
// We can keep KEY in
// --- single quote
// --- double quote
// --- quote are optional
// KEY is always STRING
let person = {
    name: "Sachin",
};

let person = {
    "first-name": "Sachin",
};

let person = {
    firstName: "Sachin",
};

let person = {
    id: 100,
};

let person = {
    list: [1, 2, 3],
};

// RULE -3
// Object consist of set of properties
// We can declare Zero, One, or More
// Properties are seprated by Comma
let person = {
    id: 10,
    firstName: "Sachin",
    lastName: "Tendulkar",
};


// Array of Object
let list = [
    {
        id: 10,
        firstName: "Sachin",
    },
    {
        id: 11,
        firstName: "Saurav",
    },
];

// Array of object
let person = { id: 1, firstName: "Virat" };
let list = [person];
