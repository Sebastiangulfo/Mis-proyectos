const btnAgregar = document.getElementById("btn-agregar");
const inputBuscar = document.querySelector(".buscar");
const listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
    const texto = inputBuscar.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function() {
        listaTareas.removeChild(li);
    };

    
    li.appendChild(span);
    li.appendChild(btnEliminar);

    listaTareas.appendChild(li);

    
}

btnAgregar.addEventListener("click", agregarTarea);

// Permite agregar 
inputBuscar.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        agregarTarea();
    }
});