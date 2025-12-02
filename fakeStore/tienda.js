fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    var productos = data;
    var contenedor = document.getElementById("cartas");

    for (var i = 0; i < 20 && i < productos.length; i++) {
      var carta = document.createElement("div");
      carta.classList.add("carta");

      var titulo = document.createElement("h3");
      titulo.innerText = productos[i].title;

      var imagen = document.createElement("img");
      imagen.src = productos[i].image;
      imagen.alt = productos[i].title;

      var precio = document.createElement("p");
      precio.innerText = "$" + productos[i].price;


      carta.appendChild(titulo);
      carta.appendChild(imagen);
      carta.appendChild(precio);

      contenedor.appendChild(carta);
    }
});