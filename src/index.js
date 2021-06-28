/* eslint-disable linebreak-style */
import validator from "./validator.js";

// console.log(validator);

function numeros(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.returnValue = false;
  }
}

function val() {
  const nroTarjeta = document.getElementById("nroTarjeta").value;
  const validador = validator.isValid(nroTarjeta);
  const mascara = validator.maskify(nroTarjeta);
  const franquicia = validator.getIssuer(nroTarjeta);
  if (nroTarjeta.length == 0) {
    alert("Debes ingresar tu número de tarjeta");
  } else {
    document.getElementById("franquicia").innerHTML = franquicia;
    document.getElementById("valor").innerHTML = validador
      ? "Tu tarjeta es valida"
      : "Tu tarjeta no es valida";
    document.getElementById("maskify").innerHTML = mascara;
  }
}

document.getElementById("nroTarjeta").addEventListener("keypress", (e) => {
  numeros(e);
});
document.getElementById("btnValidar").addEventListener("click", () => {
  val();
});
