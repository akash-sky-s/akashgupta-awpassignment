//CALLBACK FUNCTION

function helloworld(fn) {
    fn();
}

//USING ANNONYMOUS FUNCTIONS

helloworld(function () {
    console.log("callback using Annonymous");
});

//Declare callback functions first in separate variable
let callbackfn = function () {
    console.log("callback using annynomus; via variable");
};

helloworld(callbackfn);