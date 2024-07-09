function encriptar() {
    let frase = document.getElementById("texto-libre").value.toLowerCase();

    //i = toma letras mayusculas y minusculas
    //g = toma en cuenta toda la linea de texto
    //m = toma en cuenta multiples lineas (es decir, toma en cuenta los enter)
    let textoEncriptado;
    textoEncriptado = frase.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
}

// es exactamente la misma logica de la funcion de encriptar, pero invertimos los valores de la busqueda en el texto
function desencriptar() {
    let frase = document.getElementById("texto-libre").value.toLowerCase();

    let textoEncriptado;
    textoEncriptado = frase.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
}


// funcion para que el boton copiar sirva
function copiar () {
    let contenido = document.getElementById("texto-encriptado");
    contenido.select();
    document.execCommand("Copy");
}




// esta funcion sirve para desaparecer la imagen y cargar el texto encriptado
function mostrarTextoEncriptado() {
    let imagen = document.getElementById("ocultar");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let botonCopiar = document.getElementById("boton-copiar");

    if (imagen.style.display === 'block') {
        textoEncriptado.style.display = 'none';
        botonCopiar.style.display = 'none';
    } else {
        imagen.style.display = 'none';
        textoEncriptado.style.display = 'block';
        botonCopiar.style.display = 'block';
    }
}

// estos son los eventos al momento de precionar en el boton de encriptado
document.getElementById('boton-encriptado').addEventListener('click', function () {
    mostrarTextoEncriptado();
});

document.getElementById('boton-desencriptado').addEventListener('click', function () {
    mostrarTextoEncriptado();
});

let btn = document.getElementById("boton-encriptado")
btn.onclick = encriptar;

let btn2 = document.getElementById("boton-desencriptado")
btn2.onclick = desencriptar;

let btn3 = document.getElementById("boton-copiar")
btn3.onclick = copiar;

