// Número secreto del 1 al 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

// Botón intentar
function verificarNumero() {

    let campo = document.getElementById("numeroUsuario");
    let numero = campo.value;

    // 3 Campo vacío
    if (numero === "") {
        alert("Debe ingresar un número");
        return;
    }

    numero = Number(numero);
    intentos++;

    // 6 Felicitación
    if (numero === numeroSecreto) {

        document.getElementById("mensaje").innerHTML =
        "Felicitaciones, acertaste el número secreto";

        // 7 Intentos
        if (intentos === 1) {
            document.getElementById("intentos").innerHTML =
            "Adivinaste el número en 1 intento";
        } else {
            document.getElementById("intentos").innerHTML =
            "Adivinaste el número en " + intentos + " intentos";
        }

    }

    // 4 Número secreto mayor
    else if (numero < numeroSecreto) {

        document.getElementById("mensaje").innerHTML =
        "El número secreto es mayor";

    }

    // 5 Número secreto menor
    else {

        document.getElementById("mensaje").innerHTML =
        "El número secreto es menor";

    }

    // 8 Limpiar campo automáticamente
    campo.value = "";
    campo.focus();
}

// 9 Nuevo juego
function nuevoJuego() {

    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;

    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("intentos").innerHTML = "";
    document.getElementById("numeroUsuario").value = "";
}