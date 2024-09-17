let cantidad = document.getElementById('cantidad');
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let borrar = document.getElementById("limpiar")

const cadenasDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar (){

    let numeroDigitado = parseInt (cantidad.value);
    
    if (numeroDigitado < 8){
        alert("El numero de caracteres tiene que ser mayor a 8");
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenasDeCaracteres [Math.floor (Math.random() * cadenasDeCaracteres.length)];
        password+=caracterAleatorio;

    }
    contrasena.value = password;

    if (contieneMayuscula(password) || contieneNumero(password === true)){
        alert ('la contraseña es fuerte')

    } else {
        alert('contraseña debil')
    }
    
    
   
  }
  function contieneMayuscula(cadena) {
    return cadena.split('').some(letra => letra === letra.toUpperCase() && letra !== letra.toLowerCase());
}

function contieneNumero(cadena) {
    return cadena.split('').some(caracter => !isNaN(caracter) && caracter !== ' ');
}











function limpiar (){
    document.getElementById("contrasena").value = '';
    document.getElementById('cantidad').value = '';
}













