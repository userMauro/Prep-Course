// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
  // nombre[0] toma el nombre como un arreglo y su index 0
  //.toUpperCase devuelve el index elegido pero en mayúscula
  // slice(1) elige el primer elemento dentro del array y devuelve una copia entera del array
  // al sumar ambas funciones, me devuelve el index 0 del array 'nombre' en mayúscula >>>
  // >>> en una copia modificada del array (el original no se modifica)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
  // retorno el parámetro 'cb' que es una callback()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
  // retorno el parámetro 'cb' que es una callback() con los parámetros especificados (n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  }, 0)
  return cb(suma);
  //35. declaro la variable 'suma', donde voy a guardar el total de la suma del array 'numeros'
  // numeros.reduce() es una función que necesita 2 parámetros
  // el acumulador, que se puede declarar su valor inicial afuera de la (function(){}, 0)
  // el elemento, que son los elementos adentro del array 'numeros'
  // la función reduce() es un bucle que va pasando por todos los elementos
  //36. retorno acumulador actual + elemento (y lo guardo en acumulador, que toma un nuevo valor)
  // la función repite este paso, hasta pasar por todos los elementos >>>
  // y guardarlo en la variable 'suma'
  //38 .retorno el parámetro 'cb' que es una callback() con el parámetro (suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (i = 0; i < array.length; i++) {
    cb(array[i]);
  }
  //54. creo el bucle que va a pasar por todo el array
  //55. invoco la callback() con el parámetro que es el elemento actual del array (array[i])
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function(e) {
    return cb(e);
  });
  return nuevoArray;
  //66. declaro la variable 'nuevoArray', donde guardo el nuevo array creado por el método map
  // el método map copia la array recibida por el parámetro 'array'
  // >>> y la guarda en su parámetro 'e' (sin modificar la original)
  //67. retorno el parámetro 'cb' que es una callback() con el parámetro 'e' que contiene la nueva array
  //69. retorno el nuevo array 

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i][0] == "a") {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
  //82. creo un nuevo array llamado "nuevoArray"
  //83. itero por el array ingresado por el parámetro 'array'
  //84. si el elemento del array en el que estoy, su primer carácter es == "a"
  // >>> se cumple la condición.
  // array[i][0] --> [i] elemento --> [0] primer index del elemento
  //85. con el método 'push' le agrego al nuevo array el elemento que cumple la condición
  //88. retorno el nuevo array, ya con todos los elementos que cumplen la condición
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
