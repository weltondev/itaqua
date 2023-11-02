let btnSenha = document.querySelector('#btnSenha');

let senha = document.querySelector('#senha');

btnSenha.addEventListener('click', () => {
    if(senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
    } else {
        senha.setAttribute('type', 'password');
    }
});