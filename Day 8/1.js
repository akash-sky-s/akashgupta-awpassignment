// GLOBAL FUNCTION FUNDAMENTAL

//setInterval

//Calling setInterval

//Case 1
setInterval(function () {
    console.log("I am interval,using annonymous..!!")
}, 1000);

//Case 2
setInterval(() => {
    console.log("I am interval,using arrow..!!")
}, 1000);

//Case 3
let anfn = function () {
    console.log("I am getting uses as parameter inside the setinterval");
};
setInterval(anfn, 1000);

// the logic of the program is syncronous
function example() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
}

//Non blocking statement(async here)
function example1() {
    console.log("1");
    console.log("2");

    setInterval(() => {
        console.log("3. I am callback", new Date());
    }, 2000);

    console.log("4");
    console.log("5");
}