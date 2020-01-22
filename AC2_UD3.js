/*Primero creo el array para piedra,papel y tijera y luego el array para  que
me muestre un mensaje por pantalla la inserción de uno de ellos*/
var eleccion=['piedra', 'papel', 'tijera'];
var elegido = prompt("Introduzca piedra,papel o tijera");

/*Creamos el random donde nos elegirá un valor al azar mediante el uso del
objeto math y sus métodos floor y random*/
var random = eleccion[Math.floor(Math.random()*eleccion.length)];
alert(random);

/*Mediante la sentencia de control if introduzco los diferentes valores,
mostrando alert en la opción definida*/
if((random==elegido)){
  alert('Empate');
}
if(((random=='papel') &&(elegido=='tijera'))||((random=='piedra') &&(elegido=='papel'))||((random=='tijera') &&(elegido=='piedra'))){
  alert('Ganas');
}
if(((random=='tijera') &&(elegido=='papel'))||((random=='papel') &&(elegido=='piedra'))||((random=='piedra') &&(elegido=='tijera'))){
  alert('Pierdes');
}
