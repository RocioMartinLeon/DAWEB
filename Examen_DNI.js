function dni() {
  /*primero declaro la variable dni y le indico que me muestre el
  siguiente mensaje por pantalla*/
  var dni = prompt("Introduce tu numero de DNI(sin la letra)");
  //Creamos la expresión regular de 7 dígitos ya que cuenta del 0 al 7.
  var expreg =/^\d{7}[0-9]$/;
  var caracteres="TRWAG";
  //Saco el resto de los números introducidos
  var letracalculada=dni%5;
  //permitimos acceder al carácter que queremos
  var letra=caracteres.charAt(letracalculada);
  /*Mediante la sentencia de control if/else le pido que si se cumple la
  condición de coincidir con lo expuesto en la expresión regular, devuelva la letra más el dni
  y si no, devuelva un error*/
  if(dni.match(expreg))
  alert(dni+letra);
  else
  alert("El DNI NO es correcto");
}
dni();
