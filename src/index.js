// import cipher from './cipher.js';

// const uppercasestring= string.topUpperCase()



// const encode = document.getElementById("codificar")
// document.getElementById("button")
// const button = document.getElementById('button-encode')

function codificar() {
   
    // pegar o offset 
    const offset = document.getElementById('offset').value;
    console.log("offset", offset)

    // Pegar o que está escrito na caixa de texto
    const msgDecodificada = document.getElementById('msgDecodificada').value;
    console.log("msgDecodificada", msgDecodificada)

    
    // codificar a mensagem (passando offset e msg original)
    const codificado = ""

    // mostrar msg codificada na segunda caixa de texto
    document.getElementById('msgCodificada').value = codificado;

}

// button.addEventListener('click', encodemsg)

// const decode = document.getElementById('decodificar')

// const buttondecode = document.getElementById('button-decode')

// function decodificar() {
    //    let decoded = cipher.decode(offset.value,decode.value)
    //    document.getElementById('resdecode').innerHTML = decoded;
    // }

    // pegar o offset 
    // const offset = document.getElementById('offset').value;
    //     console.log("offset", offset)

    // Pegar o que está escrito na caixa de texto codificado
    // const msgcodificada = document.getElementById('msgCodificada').value;
    //     console.log("msgCodificada", msgCodificada)

    // decodificar a mensagem (passando offset e msg codificada)
    const msgCodificada = document.getElementById('msgCodificada').value

    // mostrar msg decodificada na primeira caixa de texto

    // }

// buttondecode.addEventListener('click', decodemsg)

// cipher.encode (offset, Text)
// cipher.decode (offset, Text)
// console.log(cipher);

// Dica: criem variáveis para o acesso ao dom no início do arquivo como:

// const domElement = document.querySelector(…) 

// E depois podem usar:

// domElement.addEventListener…

// Talvez ajude a ficar mais legível, just a tip :)
