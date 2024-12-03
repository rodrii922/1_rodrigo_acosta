// var nombre = prompt("Dime tu nombre");
// var instituto = prompt("Nombre del instituto")

// console.log(nombre);

// document.write("<h1>" + nombre + "</h1>")

// document.write(" <table border=\"1\">")
// document.write("<tr><th>Nombre</th><th>Instituto</th></tr>");
// document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>");
// document.write("</table>");

// 
// function mostrarfecha(){
//     var now = Date();
//     console.log("Ahora son las " + now);
//     // alert("Ahora son las " + now)
//     document.write("<h1>" + now + "</h1>");
// }
// // Llamar a la funcion mostrar fecha 
// document.getElementById("boton1").onclick = () => {
//     console.log("Click sobre ek boton 4...");
//     mostrarfecha();
// }
// document.getElementById("micaja").style.fontSize = "10px";
// function changeFontSize(){
//     var miCaja = document.getElementById("micaja");
//     var fontSizeMiCaja = miCaja.style.fontSize;
//     console.log ("mi caja font size" + fontSizeMiCaja);
//     if(fontSizeMiCaja == "10px")
//     {
//         miCaja.style.fontSize = "12px";
//     } 
//     else if (fontSizeMiCaja == "12px")
//     {
//         miCaja.style.fontSize = "14px";
//     }
//     else
//     {
//         miCaja.style.fontSize = "10px"
//     }
// }
// var botonChangeFontSize = document.getElementById("botonChangeFontSize");
// botonChangeFontSize.onclick = () => {
//     changeFontSize();
// }
document.getElementById("micaja").style.backgroundColor = "pink";
function changeBackgroundColor(){
    var miCaja = document.getElementById("micaja");
    var backgroundColor = miCaja.style.backgroundColor;
    console.log ("mi caja background color" + backgroundColor);
    if(backgroundColor == "pink")
    {
        miCaja.style.backgroundColor = "green";
    } 
    else if (backgroundColor == "green")
    {
        miCaja.style.backgroundColor = "blue";
    }
    else
    {
        miCaja.style.backgroundColor = "pink"
    }
}
var botonChangeBackgroundColor = document.getElementById("botonChangeBackgroundColor");
botonChangeBackgroundColor.onclick = () => {
    changeBackgroundColor();
}
var miCaja = document.getElementById("micaja");
miCaja.onmouseenter = () => {
    miCaja.innerHTML = "Hola"
}
// Cambiar texto del div con id miCaja cuando salgo de encima del elemento
miCaja.onmouseleave = () => {
    miCaja.innerHTML = "Hasta luego!";
}
