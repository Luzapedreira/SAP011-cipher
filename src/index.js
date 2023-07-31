import cipher from './cipher.js';

const offset = document.getElementById('offset')

const encode = document.getElementById('codificar')

const button = document.getElementById('button-encode')

function encodemsg() {
    let encoded = cipher.encode(offset.value,encode.value)
    document.getElementById('resencode').innerHTML = encoded;
}


cipher.encode (offset, Text)
cipher.decode (offset, Text)
console.log(cipher);
