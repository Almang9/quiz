var boton = document.getElementById("enviar")
boton.onclick = function(){
var str = document.getElementById("name").value;
var str2 = document.getElementById("mail").value;
var str3 = document.getElementById("message").value;
console.log(str);
console.log(str2);
console.log(str3);
if (str2.includes("@")&&str2.includes(".com")) {
    alert("mensaje envioado exitosamente");
} else {
    alert("el correo itroducido está mal redactado");
}}
