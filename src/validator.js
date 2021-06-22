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

  maskify:function(cardNumber){
    // eslint-disable-next-line no-console
        return cardNumber.split('').map((letter, idx) => idx < cardNumber.length - 4 ? '#' : letter).join('');
  },    
  
  franquicia:function(cardNumber) {
    if (cardNumber[0]==4) {
      return "Visa";
    }

  
}
};


export default validator;
