// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = Object.entries(objeto);
  return matriz;
  // Object.entries transforma un objeto en un array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};

  for (i = 0; i < string.length; i++) {
    if (!obj[string[i]]) obj[string[i]] = 0;
    obj[string[i]] += 1;
  }
  return obj;
  //24. declaro el objeto nuevo
  //26. con un bucle for, recorro el string pasado por parámetro
  //27. si no existe el obj[string[i]] en nuestro obj, lo crea con un valor de 0
  //28. si ya existe esa clave en el 'obj', eleva su valor en 1
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";

  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayus += s[i];
    } else {
      minus += s[i];
    }
  }
  return (mayus + minus);
  //43,44. creo las variables string 'mayus' y 'minus'
  //46. uso un bucle para recorrer el string pasado por el parámetro 's'
  //47. si la primer letra del elemento 's' es igual a la primer letra en maýuscula >>>
  // >>> la guardo en mi variable 'mayus' junto a las mayúsculas anteriores
  //50. si no es mayor, es menor, entonces guardo la letra en 'minus'
  //53. devuelvo la suma de 'mayus' (primero) y 'minus' (segundo) para que me queden >>>
  // las mayúsculas adelante en el nuevo string
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var invertida = str.split(" ").reduce(function(frase, palabras) {
    return frase += " " + palabras.split("").reverse().join("");
  },"")

  return invertida.slice(1);
  //70. declaro 'invertida' que tiene el argumento 'str' con 2 funciones
  // .split(" ") devuelve una copia del string 'str' en un array separando los elementos del interior >>>
  // >>> cuando encuentre el caracter " "
  // .reduce() muy importante usarlo seguido de split, porque solo se aplica a un array, si lo agrego >>>
  // >>> en otra linea sin el split, reconoce al 'str' como string y tira error
  //71. el reduce() recorre el array 'str' elemento por elemento, guardando de a uno en 'palabras' y >>>
  // >>> en 'frase' guarda lo que mande el 'return'
  // palabras.split("").reverse().join("") importante que vayan todas juntas (se aplican solo a un array) >>>
  // >>> si se aplica a un string tirra error.
  // split("") separo el string letra por letra y creo un array. reverse() para dar vuelta la palabra >>>
  // >>> y con join("") vuelvo a transformar el array en un string con la palabra inversa
  //74. retorno invertida que le agrego el método slice(1) para borrar el primer carácter que es un " "
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = numero.toString();
  if (string === string.split("").reverse().join("")) return "Es capicua";
  else return "No es capicua";
  //95. transformo el número en un string
  //96. comparo el string con el string pero invertido, si son iguales, es capicua
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de *NO* contener dichas letras.
  //Escribe tu código aquí
  var resultado = cadena.replace(/[abc]/g, '')
  return resultado
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrayOrdenado = arr.sort(function(a, b){ return a.length - b.length})
  return arrayOrdenado;
// arr.sort() por defecto te ordena el array de A a Z pero tambien funciona comparando números >>>
// >>> al agregarle una función de comparación:
// (function(a, b) {return a.length - b.length}) 'a' y 'b' en bucle van comparando los elementos del array
// al agregarle {return a.length - b.length} en vez de {return a - b}, me los compara por la longitud >>>
// de sus palabras y no por orden alfabético, poner + o - cambia el orden de mayor a menor.
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var nuevoArray = [];

  for (var i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      nuevoArray.push(arreglo1[i]);
    }
  }

  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

