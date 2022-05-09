function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace('e', 'enter').replace('i', "imes").replace('a', "ai").replace('o', 'ober').replace('u', 'ufat');
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    }
  
    
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".text-input-salida").value = textoCifrado; document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;


console.log(p.replace('dog', 'monkey'));    

var str = "Apples are round, and apples are juicy.";
var newstr = str.replace("apples", "oranges", "gi");
print(newstr);