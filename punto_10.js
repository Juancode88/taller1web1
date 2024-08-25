// Solicitar al usuario el primer número
let n1 = parseFloat(prompt("Introduce el primer número:"));

// Solicitar al usuario el segundo número
let n2 = parseFloat(prompt("Introduce el segundo número:"));

// Solicitar al usuario la operación deseada (suma, resta, multiplicación, división)
let operacion = prompt("Introduce la operación que deseas realizar (+, -, *, /):");

// Inicializar variable para el resultado
let resultado;

// Realizar la operación basada en la entrada del usuario
if (operacion === "+") {
  resultado = n1 + n2;
} else if (operacion === "-") {
  resultado = n1 - n2;
} else if (operacion === "*") {
  resultado = n1 * n2;
} else if (operacion === "/") {
  // Comprobar si el usuario intenta dividir por cero
  if (n2 !== 0) {
    resultado = n1 / n2;
  } else {
    resultado = "Error: Por criterio matematico no se puede dividir por cero";
  }
} else {
  resultado = "Operación no válida";
}

// Mostrar el resultado en la consola
console.log("El resultado es: " + resultado);

// Mostrar el resultado en una alerta
alert("El resultado de la operación es: " + resultado);