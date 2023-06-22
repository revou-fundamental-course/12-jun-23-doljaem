function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

function btnClick() {
  var inputCelcius = document.getElementById("inputCelcius");
  var outputTextarea = document.getElementById("outputTextarea");
  var kalkulasiTextarea = document.getElementById("kalkulasiTextarea");

  var celcius = parseFloat(inputCelcius.value);

  if (isNaN(celcius)) {
    outputTextarea.value = "Please enter a valid temperature.";
    return;
  }

  var fahrenheit = (celcius * 9) / 5 + 32;

  outputTextarea.value = fahrenheit;

  kalkulasiTextarea.value = `${celcius}°C * (9/5) + 32 = ${fahrenheit}°F`;
}

function resetInput() {
  var inputCelcius = document.getElementById("inputCelcius");
  var outputTextarea = document.getElementById("outputTextarea");
  var kalkulasiTextarea = document.getElementById("kalkulasiTextarea");

  inputCelcius.value = "";
  outputTextarea.value = "";
  kalkulasiTextarea.value = "";
}
