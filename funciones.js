let boton = document.getElementById("boton");
let botonReducido = document.getElementById("botonReducido");
let informacionPersonal = document.getElementById("informacionPersonal");
let reducido = document.getElementById("informacionPersonalReducido");
let experiencia = document.getElementById("experiencia");
let habilidades= document.getElementById("habilidades");


boton.addEventListener('click', function(){
    boton.classList.add("seleccionado");
    informacionPersonal.classList.add("oculto");
    reducido.classList.remove("oculto");
})

botonReducido.addEventListener('click', function(){
    boton.classList.remove("seleccionado");
    informacionPersonal.classList.remove("oculto");
    reducido.classList.add("oculto");
})