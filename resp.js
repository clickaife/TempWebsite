/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }

  function convertfd() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
}

/* When the input field receives input, convert the value from celsius to fahrenheit */
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputfahrenheit1").innerHTML = (valNum-32) / 1.8;
  }

  function convertdf() {
    var celsius = document.getElementById("celsius1").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit1").value = fahrenheit.toFixed(2);
}