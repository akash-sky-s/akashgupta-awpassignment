let callAjax = function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://reqres.in/api/users?page=2");

    xhr.onload = () => {
        const refJSON = JSON.parse(xhr.responseText);

        domLogic(refJSON);
    };

    xhr.send();
};

let domLogic = function (refJSON) {

    let parent = document.querySelector("#parent");

    for (let i = 0; i < refJSON.data.length; i++) {
        let item = refJSON.data[i];

        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = item.first_name + " " + item.last_name;

        parent.insertBefore(newElement, parent.firstChild);

    }

};