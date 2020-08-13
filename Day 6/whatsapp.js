
function sendmsg() {
    let inp = document.querySelector("#input").value;
    const newElement = document.querySelector("#placeComment").cloneNode(true);
    newElement.removeAttribute("id");
    newElement.style.display = "flex";
    newElement.innerHTML = inp;

    const main = document.querySelector("#main");
    main.appendChild(newElement, main.firstChild);

    //clear the output
    document.querySelector("#input").value = "";
}