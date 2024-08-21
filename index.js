let anuncioDeEncriptado = document.getElementById("anuncio");
let anuncioSub = document.getElementById("sub");
let imgDeEncriptado = [
    document.getElementById("img__desktop"),
    document.getElementById("img__mobile")       
];

function encriptar(){
    let textoIngresado = document.getElementById("texto__ingresado").value;
    const  condicionInicial = /^[a-z0-9ñ\s]*$/.test(textoIngresado);

    let textoSecreto = textoIngresado
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (textoIngresado.length !=0 && condicionInicial){
        const textOutput = document.getElementById("textOutput");
        textOutput.innerHTML = `<textarea readonly id="texto__output">${textoSecreto}</textarea>`;
        anuncioDeEncriptado.textContent = "Mensaje encriptado con éxito";
        anuncioSub.textContent = "";
        imgDeEncriptado[0].src = "./img/raton-preview.png";
        imgDeEncriptado[1].src = "./img/raton-preview.png";
    }else if (textoIngresado.length ==0){
        retornar();
    } else{
        condicio();
    }
    
}

function desencriptar(){
    let textoIngresado = document.getElementById("texto__ingresado").value;
    const  condicionInicial = /^[a-z0-9ñ\s]*$/.test(textoIngresado);

    let textoSecreto = textoIngresado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (textoIngresado.length !=0 && condicionInicial){
        const textOutput = document.getElementById("textOutput");
        textOutput.innerHTML = `<textarea readonly id="texto__output">${textoSecreto}</textarea>`;
        anuncioDeEncriptado.textContent = "Mensaje desencriptado con éxito";
        anuncioSub.textContent = "";
        imgDeEncriptado[0].src = "./img/raton-des-preview.png";
        imgDeEncriptado[1].src = "./img/raton-des-preview.png"; 
    }else if(textoIngresado.length ==0) {
        retornar();
    }else{
        condicio();
    }
}

function retornar() {
    anuncioDeEncriptado.textContent = "Ningún mensaje fue encontrado";
    anuncioSub.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    imgDeEncriptado[0].src = "./img/gato-preview.png";
    imgDeEncriptado[1].src = "./img/gato-2-preview.png";
    alertify.warning('"NO ingresaste ningún texto"');
}

function condicio() {
    alertify.error('"Solo letras minúsculas y sin acentos"');
}

function copiar(){
    let textoIngresado = document.getElementById("texto__output").value;
    
    navigator.clipboard.writeText(textoIngresado).then(function() {
        alertify.message("Texto copiado al portapapeles");
    }).catch(function(error) {
        alertify.error("Error al copiar el texto: " + error);
    });
}

function pegar(){
    navigator.clipboard.readText().then(function(textoIngresado) {
        document.getElementById('texto__ingresado').value = textoIngresado;
        alertify.message("Texto pegado");
    }).catch(function(error) {
        alertify.error("Error al pegar el texto: " + error);
    });
}