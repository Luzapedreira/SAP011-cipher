const cipher = {encode, decode

};
const limpar = document.querySelector('#limpar');


function encode(offset,text){
  if(typeof parseInt(offset) !== 'number' || typeof text != 'string') {
    throw TypeError()
  }
  let msgdecode= ""
  for (let i = 0; i< text.length; i++){

    const numberASCII = text.charCodeAt(i);if(numberASCII >= 65 && numberASCII <= 90) {
      const calc = (((numberASCII - 65) + parseInt(offset)) % 26) + 65;
      msgdecode += String.fromCharCode(calc);
    } else if(numberASCII >= 97 && numberASCII <= 122) {
      const calc = (((numberASCII - 97) + parseInt(offset)) % 26) + 97;
      msgdecode += String.fromCharCode(calc);
    } else if (numberASCII >= 32 || numberASCII <= 64) {
      msg += String.fromCharCode(numberASCII);
    }
  } return msgdecode;
}


function decode(offset,text) {
  if(typeof parseInt(offset) !== 'number' || typeof text != 'string') {
    throw TypeError()
  }
  let msgcode =""
  for (let a = 0; a< text.length; a++){

    const numberASCII = text.charCodeAt(a);
    if(numberASCII >= 65 && numberASCII <= 90) {
      const calcDecode = (((numberASCII + 65) - parseInt(offset)) % 26) + 65;
      msgcode += String.fromCharCode(calcDecode);

    } else if(numberASCII >= 97 && numberASCII <= 122) {
      const calcDecode = (((numberASCII - 97) - parseInt(offset)) % 26) + 97;
      msgcode += String.fromCharCode(calcDecode);

    } else if(numberASCII >= 32 || numberASCII <= 64) {
      msgcode += String.fromCharCode(numberASCII);
    }
    
  } return msgdec;
}

limpar.addEventListener('click',
function limpar(){
  window.location.limpar();
})
export default cipher;
