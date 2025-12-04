const palabras = ["comida", "superviviente", "virus", "edificios", "zombified", "java"];

const boton = document.getElementById("boton");

const input = document.getElementById("letra");

const palabra = document.getElementById("palabra");

const mensaje = document.getElementById("mensaje");

const letras = [];

let contador = 0;

let contadorDerrota = 0;

let adivinar = palabras[Math.floor(Math.random() * palabras.length)];

let guiones = [];

for (let i = 0; i<adivinar.length; i++){

    guiones[i] = '_';

}

palabra.textContent = guiones.join(' ');

boton.addEventListener("click", () => {

    let letra = input.value.toLowerCase();

    input.value = "";

    mensaje.textContent = " ";

    if (letras.includes(letra)){

            mensaje.textContent = 'Letra repetida'

            return;

    }

    letras.push(letra);

    for(let i = 0; i<adivinar.length; i++){
        
        if (letra == adivinar.charAt(i)){

            guiones[i]=letra;

            palabra.textContent = guiones.join(' ');

            mensaje.textContent = ' la letra si esta en la palabra'

            contador++;

        }
        
    }

    if (contador == 0){

        contadorDerrota++;

        mensaje.textContent = "La letra no se encuentra en la palabra"

    }

    contador = 0;

    if (guiones.join('') === adivinar){

        mensaje.textContent = "Has acertado la palabra"

        window.open("ahorcadoFinal1.html");

        window.close();

    }

    if (contadorDerrota==5){

        window.open("ahorcadoFinal2.html");
        window.close();

    }

})
