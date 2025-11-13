// === Conversor de Celsius a Fahrenheit ===
function convertirCelsius() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        document.getElementById("resultadoCelsius").innerText = "Por favor ingresa un valor.";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultadoCelsius").innerText = 
        `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

// === Conversor de Centímetros a Metros ===
function convertirCentimetros() {
    let cm = document.getElementById("centimetros").value;
    if (cm === "") {
        document.getElementById("resultadoCentimetros").innerText = "Por favor ingresa un valor.";
        return;
    }

    let metros = cm / 100;
    document.getElementById("resultadoCentimetros").innerText = 
        `${cm} cm = ${metros.toFixed(2)} m`;
}
