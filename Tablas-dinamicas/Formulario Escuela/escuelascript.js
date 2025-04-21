const boton = document.querySelector("#boton");

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fhNac = document.querySelector("#fh_nac");
const idRol = document.querySelector("#id_rol");

function obtenerSexo() {
    const radios = document.getElementsByName("sexo");
    for (let radio of radios) {
        if (radio.checked) {
            return radio.parentElement.textContent.trim();
        }
    }
    return "";
}


function listener() {
    const nombreStr = nombre.value;
    const apellidoStr = apellido.value;
    const sexoStr = obtenerSexo();
    const fechaStr = fhNac.value;
    const rolStr = idRol.value;

    const tbody = document.querySelector("tbody");
    const fila = `
        <tr>
            <td>${nombreStr}</td>
            <td>${apellidoStr}</td>
            <td>${sexoStr}</td>
            <td>${fechaStr}</td>
            <td>${rolStr}</td>
        </tr>
    `;
    tbody.innerHTML += fila;

    document.querySelector(".formulario").reset();
}

boton.addEventListener("click", listener);
