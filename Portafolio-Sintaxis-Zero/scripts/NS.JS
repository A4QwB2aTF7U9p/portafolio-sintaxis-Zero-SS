
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;


function verificarNumero() {

    let campo = document.getElementById("numeroUsuario");
    let numero = campo.value;

    
    if (numero === "") {
        alert("Debe ingresar un número");
        return;
    }

    numero = Number(numero);
    intentos++;

    
    if (numero === numeroSecreto) {

        document.getElementById("mensaje").innerHTML =
        "Felicitaciones, acertaste el número secreto";

        
        if (intentos === 1) {
            document.getElementById("intentos").innerHTML =
            "Adivinaste el número en 1 intento";
        } else {
            document.getElementById("intentos").innerHTML =
            "Adivinaste el número en " + intentos + " intentos";
        }

    }

    
    else if (numero < numeroSecreto) {

        document.getElementById("mensaje").innerHTML =
        "El número secreto es mayor";

    }

    
    else {

        document.getElementById("mensaje").innerHTML =
        "El número secreto es menor";

    }

    
    campo.value = "";
    campo.focus();
}


function nuevoJuego() {

    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;

    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("intentos").innerHTML = "";
    document.getElementById("numeroUsuario").value = "";
}
