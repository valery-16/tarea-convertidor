// === OBTENER ELEMENTOS DEL DOM ===
const tempInput = document.getElementById("tempInput"); // Campo donde el usuario escribe la temperatura
const direction = document.getElementById("direction"); // Menú desplegable con el tipo de conversión
const convertBtn = document.getElementById("convertBtn"); // Botón "Convertir"
const resultArea = document.getElementById("resultArea"); // Zona donde se muestra el resultado

// === FUNCIONES DE CONVERSIÓN ===

// Convierte grados centígrados a Fahrenheit
function cToF(celsius) {
  // Fórmula: (C × 9/5) + 32
  return (celsius * 9 / 5) + 32;
}

// Convierte grados Fahrenheit a centígrados
function fToC(fahrenheit) {
  // Fórmula: (F − 32) × 5/9
  return (fahrenheit - 32) * 5 / 9;
}

// Redondea el resultado a 2 decimales
function formatNumber(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

// === FUNCIÓN PRINCIPAL PARA CONVERTIR ===
function realizarConversion() {
  // Tomar el valor que escribió el usuario
  const valor = tempInput.value; // Captura el texto dentro del input

  // Validar que no esté vacío
  if (valor.trim() === "") {
    resultArea.textContent = "Por favor, ingresa un número."; // Mensaje de error
    return; // Detiene la función
  }

  // Convertir el texto a número
  const numero = Number(valor); // Convierte el string en número

  // Verificar si el número es válido
  if (isNaN(numero)) {
    resultArea.textContent = "Valor no válido. Escribe un número real.";
    return;
  }

  // Variable donde guardaremos el resultado final
  let resultado;

  // Condición: si el usuario eligió convertir C→F o F→C
  if (direction.value === "CtoF") {
    resultado = cToF(numero); // Llama a la función para pasar de °C a °F
    resultArea.textContent = `${numero} °C = ${formatNumber(resultado)} °F`; // Muestra el resultado
  } else {
    resultado = fToC(numero); // Llama a la función para pasar de °F a °C
    resultArea.textContent = `${numero} °F = ${formatNumber(resultado)} °C`; // Muestra el resultado
  }
}

// === EVENTOS ===

// Cuando se hace clic en el botón "Convertir"
convertBtn.addEventListener("click", realizarConversion);

// Cuando se presiona la tecla Enter dentro del input
tempInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") { // Si la tecla es Enter
    realizarConversion(); // Ejecuta la conversión
  }
});
