const nombreInput = document.querySelector(".nombre"); 
const emailInput = document.querySelector(".email");  
const edadInput = document.querySelector(".edad");     
const datosOl = document.querySelector(".datos");      
const respuestaDiv = document.getElementById("respuesta"); 
const iniciarButton = document.getElementById("iniciar"); 


const nombreAlmacenado = localStorage.getItem("nombre");

if (nombreAlmacenado) {
    
    datosOl.innerHTML = `<li>Nombre almacenado: ${nombreAlmacenado}</li>`;
}


datosOl.addEventListener("click", () => {
  
    const text = nombreInput.value.trim(); 
    if (text !== "") {
        localStorage.setItem("nombre", text); 
        respuestaDiv.innerHTML = "Nombre guardado localmente!";
    
        datosOl.innerHTML = `<li>Nombre guardado: ${text}</li>`;
    } else {
        respuestaDiv.innerHTML = "El campo Nombre está vacío. No se guardó nada.";
    }
});


function camposLLenos() {
    
    const nombreValor = nombreInput.value.trim();
    const emailValor = emailInput.value.trim();
    const edadValor = edadInput.value.trim();

  
    respuestaDiv.innerHTML = "Te falta:";
    
   
    if (nombreValor === "") {
        respuestaDiv.innerHTML = "Te falta rellenar el campo **Nombre**";
        console.log("Te falta rellenar el campo Nombre");
    } else if (emailValor === "") {
        respuestaDiv.innerHTML = "Te falta rellenar el campo **Correo**";
        console.log("Te falta rellenar el campo Correo");
    } else if (edadValor === "") {
       
        respuestaDiv.innerHTML = "Te falta rellenar el campo **Edad**";
        console.log("Te falta rellenar el campo Edad");
    } else {
      
        respuestaDiv.innerHTML = "¡Todos los campos están llenos! Iniciando...";
        console.log("Todos los campos están llenos.");
        
       
        datosOl.innerHTML = `
            <li>Nombre: ${nombreValor}</li>
            <li>Correo: ${emailValor}</li>
            <li>Edad: ${edadValor}</li>
        `;
    }
}


iniciarButton.addEventListener("click", camposLLenos);