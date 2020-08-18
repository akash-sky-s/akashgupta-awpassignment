window.addEventListener("load", () => {

    const parent = document.querySelector("#parentBlock");

    let list = [
        { id: 1, title: "Javascript" },
        { id: 2, title: "HTML" },
        { id: 3, title: "CSS" },
        { id: 4, title: "DOM" },
        { id: 5, title: "AJAX" },
        { id: 6, title: "XML" },
        { id: 7, title: "JSON" },
    ];

    for (let i = 0; i < list.length; i++) {

        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = list[i].title;

        parent.insertBefore(newElement, parent.firstChild);
    }
});