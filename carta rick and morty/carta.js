fetch('https://rickandmortyapi.com/api/character/[1,2,300]')
  .then(response => response.json())
  .then(data => {
    
    document.getElementById("Rmimg1").src = data[0].image;
    document.getElementById("Rmname1").innerText = "Nombre: " + data[0].name;
    document.getElementById("Rmspecies1").innerText = "Especie: " + data[0].species;
    document.getElementById("Rmgender1").innerText = "Género: " + data[0].gender;
    document.getElementById("Rmstatus1").innerText = "Estado: " + data[0].status;

    

  })