var likeCounter = 1;

function likeHere() {
    likeCounter++;
    let likeElement = document.querySelector("#btnid");
    likeElement.innerHTML = "Like" + likeCounter;
}

function commentHere() {
    let userComment = document.querySelector("#inputId1").value;

    const newElement = document.createElement("div");
    newElement.style.display = "flex";
    newElement.style.justifyContent = "space-between";
    newElement.style.marginBottom = "8px";

    const child1 = document.createElement("div");
    child1.textContent = userComment;

    const child2 = document.createElement("button");
    child2.textContent = "DELETE";

    newElement.appendChild(child1);
    newElement.appendChild(child2);

    const commentBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#inputId1").value = "";
}