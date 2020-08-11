var likeCounter = 1;

function likeHere() {
    likeCounter++;

    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like" + likeCounter;
}

function commentHere() {
    let userComment = document.querySelector("#inputId1").value;

    //create new element
    const newElement = document.createElement("div");
    newElement.textContent = userComment;

    //adding styling to new element
    newElement.style.background = "wheat";
    newElement.style.color = "black";
    newElement.style.margin = "4px";

    //comment box element
    const commentBox = document.querySelector("#commentBox");

    //now we want to add the element at the top.
    commentBox.insertBefore(newElement, commentBox.firstChild);

    //clean the input box
    document.querySelector("#inputId1").value = "";

}