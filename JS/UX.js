function ChangeLanguage()
{
/* Para obtener el valor */
var cod = document.getElementById("Language").value;
/* Para obtener el texto */
var combo = document.getElementById("Language");
var selected = combo.options[combo.selectedIndex].text;
if(selected=="Español"){
    location.href="es/index.html";
}
else{
    location.href="../index.html";
}
}