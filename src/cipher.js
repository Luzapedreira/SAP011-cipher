const cipher = {encode, decode

};

function encode(offset,text){
  if(typeof parseInt(offset) !== 'number' || typeof text !== 'string') {
    throw TypeError()
  }
  let msgDecode= ""
  for (let i = 0; i< text.length; i++){

    // Verifica se é maiúscula
    const numberASCII = text.charCodeAt(i);if(numberASCII >= 65 && numberASCII <= 90) {
      const calc = (((numberASCII - 65) + parseInt(offset)) % 26) + 65;
      msgDecode += String.fromCharCode(calc);
    } 
    // Verifica se é minúscula
    else if(numberASCII >= 97 && numberASCII <= 122) {
      const calc = (((numberASCII - 97) + parseInt(offset)) % 26) + 97;
      msgDecode += String.fromCharCode(calc);
    }
    else if (numberASCII >= 32 || numberASCII <= 64) {
      msgDecode += String.fromCharCode(numberASCII);
    }
  } return msgDecode;
}


function decode(offset,text) {
  if(typeof parseInt(offset) !== 'number' || typeof text !== 'string') {
    throw TypeError()
  }
  let msgCode = ""
  for (let a = 0; a< text.length; a++){

    const numberASCII = text.charCodeAt(a);
    if(numberASCII >= 65 && numberASCII <= 90) {
      const calcDecode = (((numberASCII + 65) - parseInt(offset)) % 26) + 65;
      msgCode += String.fromCharCode(calcDecode);

    } else if(numberASCII >= 97 && numberASCII <= 122) {
      const calcDecode = (((numberASCII - 97) - parseInt(offset)) % 26) + 97;
      msgCode += String.fromCharCode(calcDecode);

    } else if(numberASCII >= 32 || numberASCII <= 64) {
      msgCode += String.fromCharCode(numberASCII);
    }
    
  } return msgCode;
}

export default cipher;