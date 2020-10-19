var skills = '{ "skills" : [' +
'{ "Categoria":"Java" , "Valor":"85" , "max":"100" },' +
'{ "Categoria":"HTML-CSS-JS" , "Valor":"70", "max":"100" },' +
'{ "Categoria":"Angular" , "Valor":"40" , "max":"100" } ]}'
var obj =JSON.parse(skills);
for (let index = 0; index < 3; index++) {
    var str = "skill-" + index
    var str2 = "text-skill-" + index
    var str3 = obj.skills[index].Categoria + ": " + obj.skills[index].Valor + " / "+ obj.skills[index].max
    console.log(str, str2)
    document.getElementById(str).style.height =  obj.skills[index].Valor*2 + "px"  
    document.getElementById(str2).innerText  =str3

}
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
