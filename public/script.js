const botaoEnviar = document.getElementById('enviar');
const texto = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (texto.value !== ""){
        socket.emit('nova mensagem', texto.value);
        texto.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const novaMensagem = document.createElement('li'); //<li></li>
    novaMensagem.classList.add('mensagem'); //<li class='mensagem'>God is good</li>
    novaMensagem.textContent = msg; //<li>God is good</li>                                                     
    chat.appendChild(novaMensagem); //<div id='mensagem'><li class='mensagem'>God is good</li></div>
})