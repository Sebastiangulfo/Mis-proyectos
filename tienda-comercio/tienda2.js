console.log("Funciones.js cargado");

const productos = [
    {
        id: 1,
        nombre: "Mejora tu juego",
        descripcion: "",
        precio: 299.99,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg",
        activa: true
    },
    {
        id: 2,
        nombre: "Tus películas favoritas en Prime Video",
        descripcion: "",
        precio: 89.95,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Gabo/CO_Acquisition__Desktop_dashboard_card_1_1X_379x304_EN._SY304_CB793102714_.jpg",
        activa: true
    },
    {
        id: 3,
        nombre: "Cafetera Premium",
        descripcion: "",
        precio: 149.50,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Gabo/CO_Acquisition__Desktop_dashboard_card_2_1X_379x304_EN._SY304_CB794064360_.jpg",
        activa: true
    },
    {
        id: 4,
        nombre: "Libro: Inteligencia Artificial",
        descripcion: "",
        precio: 34.99,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/FreeShippingZone/Revised/Fuji_Free_Shipping_Zone_Dashboard_crad_1x_EN._SY304_CB562621871_.jpg",
        activa: true
    },
    {
        id: 1,
        nombre: "Todo para papá a menos de $25",
        descripcion: "",
        precio: 299.99,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/AIS_FathersDay_25/Fuji_SingleImageCard_FathersDay25_1x._SY304_CB795634726_.jpg",
        activa: true
    },
    {
        id: 2,
        nombre: "Comprar rastreadores de actividad y relojes",
        descripcion: "",
        precio: 89.95,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg",
        activa: true
    },
    {
        id: 3,
        nombre: "Cafetera Premium",
        descripcion: "",
        precio: 149.50,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Gabo/CO_Acquisition__Desktop_dashboard_card_2_1X_379x304_EN._SY304_CB794064360_.jpg",
        activa: true
    },
    {
        id: 4,
        nombre: "Libro: Inteligencia Artificial",
        descripcion: "",
        precio: 34.99,
        imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/FreeShippingZone/Revised/Fuji_Free_Shipping_Zone_Dashboard_crad_1x_EN._SY304_CB562621871_.jpg",
        activa: true
    },

];

const usuarios = [
    {
        id: 1,
        nombre: "Pedro pascal",
        email: "pedropascal@gmail.com",
        telefono: "300-465-887",
        Contraseña: "pedrito12345",
    },
    {
        id: 2,
        nombre: "Sebastian yatra",
        email: "sebastianyatra@gmail.com",
        telefono: "300-465-889",
        Contraseña: "yatra12345",
    },
    

]



mostrarProductos(productos);
   

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos-container'); // Asegúrate de tener este contenedor en tu HTML

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style= 'width: 19rem; margin: 10px;'; // Estilo para las tarjetas
        card.innerHTML = `
            
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="card-body">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    
                </div>
        `;
        
        contenedor.appendChild(card);
    });
}

function iniciarsesion() {
    const email=document.getElementById("email").ariaValueMax;
    const password=document.getElementById("password").value;

    console.log("iniciando sesion con correo:",email, "y contraseña:", password);

    const usuarioEncontrado = usuario.find(u => u.email === email && u.Contraseña === password);

    if (usuarioEncontrado) {
        alert("Inicio de Sesion Exitoso");
        //Aqui puedes redirigir al usuario a otra pagina o mostrar un mensaje de exito
    } else {
        alert("Correo o Contraseña incorrectos");
        //Aqui puedes mostrar un mensaje de error
    }
}

function filtrar(){
    event.preventDefault();
    const cadfiltro=document.getElementById("filtro").value;  
    console.log("filtrando productos con:",cadfiltro);
    const productosfiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(cadfiltro.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(cadfiltro.toLowerCase())
    );
    console.log("Productos filtrados:", productosfiltrados);
    document.getElementById("productos-container").innerHTML="";
    mostrarProductos(productosfiltrados);
}