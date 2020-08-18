//JSON CALL
let callAjax = function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        const refJSON = JSON.parse(xhr.responseText);

        domLogic(refJSON);
    };

    xhr.send();
};

let domLogic = function (refJSON) {

    for (let i = 0; i < refJSON.length; i++) {
        let item = refJSON[i];

        let parent = document.querySelector("#parent");
        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = item.FirstName + " " + item.LastName;

        parent.insertBefore(newElement, parent.firstChild);
    };


};

//XML HANDLER
let callAjaxXML = function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        const xmldoc = xhr.responseXML;

        xmlDomHandler(xmldoc);
    };

    xhr.send();
};

let xmlDomHandler = (xmldoc) => {
    const authorList = xmldoc.querySelectorAll("Author");

    for (let i = 0; i < authorList.length; i++) {
        let authorItems = authorList[i];

        let firstName = authorItems.children[0].innerHTML;
        let lastName = authorItems.children[3].innerHTML;

        let parent = document.querySelector("#parent");
        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = firstName + " " + lastName;

        parent.insertBefore(newElement, parent.firstChild);
    };
};
