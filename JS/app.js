const nombre = document.querySelector(".nombre");
const email = document.querySelector(".email");
const edad = document.querySelector(".edad");
let respuesta = document.getElementById("respuesta");

let iniciar = document.getElementById("iniciar");

function camposLLenos(){

if(nombre == ""){
   respuesta.innerHTML = "Te falta rellenar el campo"
    console.log= "<p> Te falta rellenar" + respuesta+"</p>";
}else if( email == ""){
    respuesta.innerHTML = "Te falta rellenar el campo"
    console.log= "Te falta rellenar";

}else if(email == ""){
    respuesta.innerHTML = "Te falta rellenar el campo"
    console.log= "Te falta rellenar";

}else if(edad == ""){
    respuesta.innerHTML = "Te falta rellenar el campo"
    console.log= "Te falta rellenar";

}
}
iniciar.addEventListener("click", camposLLenos);