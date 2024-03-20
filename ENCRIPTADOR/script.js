const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const copiar_texto = document.getElementById("#copiar");

const codigo_matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function boton_encriptar(){
    const texto = encriptar (campo_texto.value);
    campo_mensaje.value = texto
}

function boton_desencriptar(){
    const texto = desencriptar (campo_texto.value);
    campo_mensaje.value = texto
}

function encriptar (fraseEncriptada) {
    for (let i = 0; i < codigo_matriz.length; i ++) {
        if (fraseEncriptada.includes(codigo_matriz[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                codigo_matriz[i][0],
                codigo_matriz[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function desencriptar (fraseEncriptada) {
    for (let i = 0; i < codigo_matriz.length; i ++) {
        if (fraseEncriptada.includes(codigo_matriz[i][1])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                codigo_matriz[i][1],
                codigo_matriz[i][0]
            )
        }
    }
    return fraseEncriptada;
}

document.getElementById('BotonCopiar').addEventListener('click', copiarAlPortapapeles);
function copiarAlPortapapeles() {
    const textoACopiar = campo_mensaje;
    navigator.clipboard.writeText(textoACopiar.value)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch((error) => console.error('Error al copiar: ', error));
}


document.getElementById('texto-encriptado').addEventListener('keypress', function(event) {
    var regex = new RegExp("^[a-zA-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});