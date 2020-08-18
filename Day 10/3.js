let likeCounter = 0;

function btnlike() {
    let like = document.querySelector("#like").value;
    likeCounter++;
    like.innerHTML = "Like" + likeCounter;
}

function btnComment() {
    let userComment = document.querySelector("#input").value;

    let newElement = document.querySelector("#commentBox").cloneNode(true);

    newElement.removeAttribute("id");

    newElement.style.visibility = "visible";

    newElement.children[0].innerHTML = userComment;

    let mainBox = document.querySelector("#mainBox");
    mainBox.insertBefore(newElement, mainBox.firstChild);

    document.querySelector("#input").value = "";
}

function btnDelete(btnElement) {
    btnElement.parentElement.parentElement.remove();
}