/*3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar(){
let seguir;
let sexoTitular;
let lugar;
let temporada;
let cantidad;
let contadorBariloche=0;
let contadorCataratas=0;
let contadorSalta=0;
let lugarMasElegido;
let flagTitular=0;
let sexoTitularMasPax;
let mayorCantidad;
let acumPersonasInvierno=0;
let contadorPersonasInvierno=0;
let promedio;

do{
sexoTitular=prompt("Ingrese sexo del titular");
while (sexoTitular!="f" && sexoTitular!="m"){
sexoTitular=prompt("ERROR.Por favor, reingrese el sexo del titular");
}
lugar=prompt("Ingrese el nombre del lugar");
while (lugar!="bariloche" && lugar!="salta" && lugar!="cataratas"){
lugar=prompt("ERROR.Reingrese el nombre del lugar");
}
temporada=prompt("Ingrese temporada");
while (temporada!="primavera" && temporada!="verano" && temporada!="otoño" && temporada!="invierno"){
temporada=prompt("ERROR. Reingrese temporada");
}
cantidad=parseInt(prompt("Por favor, ingrese cantidad de personas que viajan"));
while (isNaN(cantidad)){
cantidad=parseInt(prompt("ERROR.Reingrese cantidad de personas que viajan"));
}
if (lugar=="bariloche"){
contadorBariloche++;	
}else if (lugar =="cataratas"){
contadorCataratas++;
}else{
contadorSalta++;
}
//b)Sexo del titular q lleva más pasajeros.
if (flagTitular==0 || cantidad>mayorCantidad){
mayorCantidad=cantidad;
sexoTitularMasPax=sexoTitular;
flagTitular=1;
}
//c)el promedio de personas por viaje,  que viajan en invierno
if (temporada=="invierno"){
acumPersonasInvierno=acumPersonasInvierno+cantidad;
contadorPersonasInvierno++;
}

seguir=prompt("Desea continuar ingresando datos?");
}
while (seguir=="si");
//A. El lugar mas elegido


if(contadorBariloche>contadorCataratas && contadorBariloche>contadorSalta){
lugarMasElegido="Bariloche"
}else if(contadorCataratas>=contadorBariloche && contadorCataratas>contadorSalta){
lugarMasElegido="Cataratas";
}else{
lugarMasElegido="Salta";
}
promedio=acumPersonasInvierno/contadorPersonasInvierno;

console.log ("A. El lugar mas elegido es: " + lugarMasElegido);
console.log ("B. El sexo del titular que lleva mas pax es: " + sexoTitularMasPax + " y lleva " + mayorCantidad + " de pax");
console.log ("C. El promedio de pax por viaje en invierno: " + promedio);
}