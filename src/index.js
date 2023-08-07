import cipher from './cipher.js';
// cipher.encode (offset, Text)
// cipher.decode (offset, Text)
// console.log(cipher);
// const uppercasestring= string.topUpperCase()

function codificar() {
  // pegar o offset
  const offset = document.getElementById('offset').value;
  // Pegar o que está escrito na caixa de texto
  const msgDecodificada = document.getElementById('msgDecodificada').value;
  
  // codificar a mensagem (passando offset e msg original)
  const codificado = cipher.encode(offset, msgDecodificada)
  // mostrar msg codificada na segunda caixa de texto
  document.getElementById('msgCodificada').value = codificado;
}

const buttonEncode = document.getElementById('buttonEncode')
buttonEncode.addEventListener('click', codificar)

function decodificar() {

        
  // pegar o offset 
  const offset = document.getElementById('offset').value;
  // console.log("offset", offset)

  // Pegar o que está escrito na caixa de texto codificado
  const msgcodificada = document.getElementById('msgCodificada').value;
  // console.log("msgCodificada", msgCodificada)

  // decodificar a mensagem (passando offset e msg codificada)
  const decodificado = cipher.decode(offset, msgcodificada)

  // mostrar msg decodificada na primeira caixa de texto
  document.getElementById("msgDecodificada").value = decodificado;

}

const buttonDecode = document.getElementById('buttonDecode')
buttonDecode.addEventListener('click', decodificar)



