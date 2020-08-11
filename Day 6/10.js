var likeCounter = 1;

function likeHere() {
    likeCounter++;
    let newElemenet = document.querySelector("#btnid");
    newElemenet.innerHTML = "Like" + likeCounter;
}

function commentHere() {
    let userComment = document.querySelector("#inputId1").value;
    const newElement = document.querySelector("#referenceCommentId").cloneNode(true);
    newElement.removeAttribute("id");
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = userComment;

    const commentBox = document.querySelector("#commentBox");
    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#inputId1").value = "";
}