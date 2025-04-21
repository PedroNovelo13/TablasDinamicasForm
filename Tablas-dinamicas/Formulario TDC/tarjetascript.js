const boton = document.querySelector("#boton");

const numeroTarjeta = document.querySelector("#numerotarjeta");
const fechaVencimiento = document.querySelector("#fechavencimiento");
const cvc = document.querySelector("#cvc");
const nombreTitular = document.querySelector("#nombretitular");
const contrasena = document.querySelector("#contrasena");
const talla = document.querySelector("#talla");
const comentarios = document.querySelector("#comentarios");

function obtenerTipoTarjeta() {
    const radios = document.getElementsByName("tipo");
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return "";
}

function listener() {
    const numeroTarjetaStr = numeroTarjeta.value;
    const fechaVencimientoStr = fechaVencimiento.value;
    const cvcStr = cvc.value;
    const nombreTitularStr = nombreTitular.value;
    const tipoTarjetaStr = obtenerTipoTarjeta();
    const tallaStr = talla.value;
    const comentariosStr = comentarios.value;

    const tbody = document.querySelector("tbody");
    const fila = `
        <tr>
            <td>${numeroTarjetaStr}</td>
            <td>${fechaVencimientoStr}</td>
            <td>${cvcStr}</td>
            <td>${nombreTitularStr}</td>
            <td>${tipoTarjetaStr}</td>
            <td>${tallaStr}</td>
            <td>${comentariosStr}</td>
        </tr>
    `;
    tbody.innerHTML += fila;

    document.querySelector(".formulario").reset();
}

boton.addEventListener("click", listener);
