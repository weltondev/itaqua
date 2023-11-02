let btnSenha = document.querySelector('#btnSenha');
let btnConfrimaSenha = document.querySelector('#btnConfirmaSenha');

let senha = document.querySelector('#senha');
let confirmaSenha = document.querySelector('#confirmaSenha');

btnSenha.addEventListener('click', () => {
    if(senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
    } else {
        senha.setAttribute('type', 'password');
    }
});

btnConfrimaSenha.addEventListener('click', () => {
    if(confirmaSenha.getAttribute('type') == 'password') {
        confirmaSenha.setAttribute('type', 'text');
    } else {
        confirmaSenha.setAttribute('type', 'password');
    }
});
