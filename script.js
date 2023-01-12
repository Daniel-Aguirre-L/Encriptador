function encriptar() {
    var texto = document.getElementById("inputtext").value.toLowerCase();
    var inputtext = texto.replace(/e/img, "enter");
    var inputtext = inputtext.replace(/o/img, "ober");
    var inputtext = inputtext.replace(/i/img, "imes");
    var inputtext = inputtext.replace(/a/img,"ai");
    var inputtext = inputtext.replace(/u/img, "ufat");
    document.getElementById("resultado").innerHTML = inputtext;
    document.getElementById("resultado").style.display = ""
    document.getElementById("imgr").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("btncopiar").style.display = "inline";  
}

function desencriptar() {
    var texto = document.getElementById("inputtext").value.toLowerCase();
    var inputtext = texto.replace(/enter/img, "e");
    var inputtext = inputtext.replace(/ober/img, "o");
    var inputtext = inputtext.replace(/imes/img, "i");
    var inputtext = inputtext.replace(/ai/img,"a");
    var inputtext = inputtext.replace(/ufat/img, "u");
    document.getElementById("resultado").innerHTML = inputtext;
    document.getElementById("imgr").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("btncopiar").style.display = "inline";
}

function copiar () {
    var contenido =document.getElementById("resultado");
    contenido.select();
    document.execCommand("copy");
}
