let array = [];

document.addEventListener("DOMContentLoaded", function() {
    renderArray();
});

function renderArray() {
    const arrayContainer = document.getElementById("array-container");
    arrayContainer.innerHTML = "";
    array.forEach((element, index) => {
        const div = document.createElement("div");
        div.classList.add("array-element");
        div.textContent = element;
        arrayContainer.appendChild(div);
    });
}

function insertElement() {
    const input = document.getElementById("element-input");
    const value = input.value;
    if (value) {
        array.push(value);
        renderArray();
        input.value = "";
        setMessage(`Elemento ${value} insertado.`);
    } else {
        setMessage("Por favor, ingrese un valor.");
    }
}

function deleteElement() {
    const input = document.getElementById("element-input");
    const value = input.value;
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
        renderArray();
        input.value = "";
        setMessage(`Elemento ${value} eliminado.`);
    } else {
        setMessage("Elemento no encontrado.");
    }
}

function searchElement() {
    const input = document.getElementById("element-input");
    const value = input.value;
    const index = array.indexOf(value);
    if (index !== -1) {
        setMessage(`Elemento ${value} encontrado en la posición ${index}.`);
    } else {
        setMessage("Elemento no encontrado.");
    }
}

function setMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
}

