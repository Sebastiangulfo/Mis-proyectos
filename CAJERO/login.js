function validarFormulario() {
    const usuario = document.getElementById("usuario").value.toUpperCase();
    const contraseña = document.getElementById("contraseña").value;



    if (usuario === "" || contraseña === "") {
        alert("Por favor ingrese los datos requeridos");
        return false;

    }

    const usuariosvalidos = [

            { nombre: "PEDRO", contraseña: "1234" },
            { nombre: "JUAN", contraseña: "1234" },
            { nombre: "LUIS", contraseña: "1423" },
            { nombre: "MIGUEL", contraseña: "1123" },
            { nombre: "DAVID", contraseña: "4321" },
            { nombre: "LUISA", contraseña: "1231" },
            { nombre: "ADRIANA", contraseña: "2431" },
            { nombre: "LAURA", contraseña: "2341" },
            { nombre: "CONSUELO", contraseña: "5431" },
            { nombre: "DIANA", contraseña: "1635" },
    ];


    const usuarioValido = usuariosvalidos.find(u => u.nombre === usuario && u.contraseña === contraseña);


    if (!usuarioValido) {
        alert("Usuario o contraseña incorrectos");
        return false;
    }



    window.location.href = "cha.html";
    return false;
}