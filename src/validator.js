/* eslint-disable linebreak-style */
const validator = {
  isValid(nroTarjeta) {
    // let nroTarjeta= document.getElementById("nroTarjeta").value;
    // console.log(nroTarjeta);
    // document.getElementById("valor").innerHTML=nroTarjeta;

    const tarjetaArray = Array.from(nroTarjeta, (x) => parseInt(x));
    // console.log(tarjetaArray);

    const reverse = tarjetaArray.reverse();
    // console.log(reverse);

    let suma = 0;

    for (let i = 0; i < tarjetaArray.length; i++) {
      let element = reverse[i];
      if (i % 2 !== 0) {
        element *= 2;
        if (element > 9) {
          element -= 9; // suma de digitos
          // element=1 + (element%10);
        }
      }
      suma += element;
    }
    // console.log(suma);

    if (suma % 10 == 0) {
      return true;
      //console.log("Tu tarjeta es valida");
    }

    return false;
    // console.log("Tu tarjeta no es valida");
  },

  maskify: function (cardNumber) {
    // eslint-disable-next-line no-console
    return cardNumber
      .split("")
      .map((letter, idx) => (idx < cardNumber.length - 4 ? "#" : letter))
      .join("");
  },
  /*maskify: function(cardNumber){
    const number = [];
    for (let i=0; i< cardNumber.length; i++){
      if(i<cardNumber.length-4){
        number.push("*");
      }
      else{
        number.push(cardNumber[i])
      }
    }
    return number.join("");
  }, */

  getIssuer: function (cardNumber) {
    if (cardNumber[0] == 4 && cardNumber.length == 16) {
      return "Visa";
    } else if (
      50 < parseInt(cardNumber.substring(0, 2)) &&
      parseInt(cardNumber.substring(0, 2)) < 56) {
      return "Mastercard";
    } else if (33 < parseInt(cardNumber.substring(0,2)) && parseInt(cardNumber.substring(0,2)) < 38) {
      return "American Express";
    }
  },

  /*americanexpress:function (cardNumber) {34 y 37
    if (cardNumber[0]==37) {
      return "AmericanExpress";
    }
  }*/
  /*franquicia: function(cardNumber) {
    if(cardNumber(0)==4){
      return "Visa";
    }
    if(cardNumber.substr(0,2) >= "51" && cardNumber.substr(0,2) <= "55")
    return "Mastercard";
    } else if(cardNumber,charAt(0) == "3") {
      if (cardNumber.charAt(1) == "4" || cardNumber.charAt(1) == "7") {
        return "Amex";
      }
    }*/
};

export default validator;
