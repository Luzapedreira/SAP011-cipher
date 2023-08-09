import cipher from './cipher.js';

function codificar() {
  const offset = document.getElementById('offset').value;
  const msgDecodificada = document.getElementById('msgDecodificada').value;
  const codificado = cipher.encode(offset, msgDecodificada)
  document.getElementById('msgCodificada').value = codificado;
}

const buttonEncode = document.getElementById('buttonEncode')
buttonEncode.addEventListener('click', codificar)

function decodificar() {
  const offset = document.getElementById('offset').value;
  const msgcodificada = document.getElementById('msgCodificada').value;
  const decodificado = cipher.decode(offset, msgcodificada)
  document.getElementById("msgDecodificada").value = decodificado;

}

const buttonDecode = document.getElementById('buttonDecode')
buttonDecode.addEventListener('click', decodificar)



