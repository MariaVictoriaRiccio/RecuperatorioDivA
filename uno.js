/*1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log*/
function mostrar(){
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorM=0;
	let acumEdad=0;
	let flagMpesado=0;
	let pesoMmax;
	let nombrePesado;
	let promedio;

for (i=0;i<5;i++){
//Ingreso de datos y validacion.
nombre=prompt("Ingrese su nombre");
while (!isNaN(nombre)){
nombre=prompt("ERROR.Por favor, reingrese su nombre");
}
peso=parseInt(prompt("Ingrese el peso"));
while(isNaN(peso) || peso<0){
peso=parseInt(prompt("ERROR.Reingrese el peso"));
}
sexo=prompt("Ingrese su sexo");
while (sexo!="f" && sexo!="m"){
sexo=prompt("ERROR.Por favor, reingrese su sexo");
}
edad=parseInt(prompt("Ingrese su edad"));
while (edad<0 || edad>100){
edad=parseInt(prompt("ERROR.Por favor, reingrese edad valida"))
}
//a. Informar cantidad de mujeres
if (sexo=="f"){
contadorM++;
}
//b.edad promedio en total
acumEdad=edad+acumEdad;
//c.el hombre mas pesado.
if (sexo="m"){
if (flagMpesado==0 || peso>pesoMmax){
nombrePesado=nombre;
pesoMmax=peso;
flagMpesado=1;
}
}
}
promedio=acumEdad/5;
console.log ("A.La cantidad de mujeres es: " + contadorM);
console.log ("B. El promedio de edades es: "  + promedio);
console.log ("C. El hombre mas pesado es: " + nombrePesado + " y su peso es de: " + pesoMmax);
}//fin funcion
