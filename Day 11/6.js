


window.addEventListener("load", () => {

    // Step 1
    let xhr = new XMLHttpRequest();

    //step 2
    xhr.open("GET", "https://reqres.in/api/users?page=2");

    //Step 3
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {

            let sjson = JSON.parse(xhr.responseText);

            domlogicHere(sjson.data);
        }
    };

    // Step 4
    xhr.send();
});

// list from server
let domlogicHere = function (list) {
    const parent = document.querySelector("#parentBlock");

    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";


        newElement.children[0].innerHTML =
            item.first_name + " " + item.last_name;

        parent.insertBefore(newElement, parent.firstChild);
    }
};