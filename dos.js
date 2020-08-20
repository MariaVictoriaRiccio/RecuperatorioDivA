/*2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos*/
function mostrar(){
let seguir;
let marca;
let precio;
let peso;
let tipo;
let acumPeso=0;
let flagLiquidos=0;
let precioCaroLiquidos;
let marcaCaraLiquidos;
let flagSolidos=0;
let menorPrecioSolidos;
let marcaMenorPrecioSolidos;
//pido ingreso de datos hasta que el usuario quiera y valido.
do{
  marca=prompt("Ingrese la marca del producto");
  while (!isNaN(marca)){
  marca=prompt("ERROR.Reingrese la marca del producto");
}
  precio=parseFloat(prompt("Ingrese el precio del producto"));
  while (precio<0 || isNaN(precio)){
  precio=parseFloat(prompt("ERROR.Reingrese el precio del producto"));
}
  peso=parseFloat(prompt("Ingrese el peso del producto"));
  while(isNaN(peso) || peso<0){
    peso=parseFloat(prompt("ERROR.Reingrese el peso del producto"));
}
  tipo=prompt("Ingrese el tipo de producto: liquido o solido");
  while (tipo!="solido" && tipo!="liquido"){
    tipo=prompt("ERROR.Reingrese el tipo de producto: liquido o solido");
}
//a.peso total de la compra
acumPeso=acumPeso+peso;
//b.marca del mas caro de los liquidos
if (tipo=="liquido"){
if (flagLiquidos==0 || precio>precioCaroLiquidos){
precioCaroLiquidos=precio;
marcaCaraLiquidos=marca;
flagLiquidos=1;
}
}//c.marca del mas barato de los sólidos
if (tipo=="solido"){
if (flagSolidos==0 || precio<menorPrecioSolidos){
menorPrecioSolidos=precio;
marcaMenorPrecioSolidos=marca;
flagSolidos=1;
}
}
seguir=prompt("Desea seguir ingresando productos?");
}
while (seguir=="si");
console.log ("A.El peso total de la compra es:  " + acumPeso);
  if (flagLiquidos==0){
console.log(" No se compraron liquidos")
  }
  else{
console.log ("B. La marca del mas caro de los liquidos es: " + marcaCaraLiquidos + " y su precio es: " + precioCaroLiquidos);
  }
  if (flagSolidos==0){
  console.log ("C. No se ingresaron solidos");
  }
  else{
    console.log ("C. La marca mas barata de los solidos es: " + marcaMenorPrecioSolidos + " y su precio es: " + menorPrecioSolidos);
  }
  }