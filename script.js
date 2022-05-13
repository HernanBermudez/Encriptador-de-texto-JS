const encriptar = () => {
  let codigo = document.getElementById("codigoEncriptado").value
  codigo = codigo.toLowerCase();
  let parsed = codigo.normalize('NFD').replace(/([\u0300-\u036f]|[!´"#$%&/()='¨~«`^])/g, '');
  parsed = parsed.replace(/e/g, 'enter')
  parsed = parsed.replace(/i/g, 'imes')
  parsed = parsed.replace(/a/g, 'ai')
  parsed = parsed.replace(/o/g, 'ober')
  parsed = parsed.replace(/u/g, 'ufat')
  document.getElementById("mensajeEncriptado").value = parsed
  console.log(parsed);  
}

const desencriptar = () => {
  let codigo = document.getElementById("codigoEncriptado").value
  codigo = codigo.toLowerCase();
  let parsed = codigo.normalize('NFD').replace(/([\u0300-\u036f]|[´"#$%&/()='¨~«`^])/g, '');
  parsed = parsed.replace(/enter/g, 'e')
  parsed = parsed.replace(/imes/g, 'i')
  parsed = parsed.replace(/ai/g, 'a')
  parsed = parsed.replace(/ober/g, 'o')
  parsed = parsed.replace(/ufat/g, 'u')
  document.getElementById("mensajeEncriptado").value = parsed
  console.log(parsed);  
}

const limpiar = () => {
  document.getElementById("codigoEncriptado").value = ""
  document.getElementById("mensajeEncriptado").value = ""
}


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/