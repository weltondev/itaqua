let ocultarSenha = document.querySelector("#btnSenha"); // OLHINHO NO CAMPO SENHA
let ocultarConfirmaSenha = document.querySelector("#btnConfirmaSenha"); //OLHINHO NO CAMPO CONFIRMA SENHA

let nome = document.querySelector("#nome"); // INPUT NOME
let labelNome = document.querySelector("#labelNome"); // LABEL NOME
let validaNome = false; // VALIDA NOME

let usuario = document.querySelector("#usuario"); // INPUT USUARIO
let labelUsuario = document.querySelector("#labelUsuario"); // LABEL USUARIO
let validaUsuario = false; // VALIDA USUARIO

let senha = document.querySelector("#senha"); // INPUT SENHA
let labelSenha = document.querySelector("#labelSenha"); // LABEL SENHA
let validaSenha = false; // VALIDA SENHA

let confirmaSenha = document.querySelector("#confirmaSenha"); // INPUT CONFIRMA SENHA
let labelConfirmaSenha = document.querySelector("#labelConfirmaSenha"); // LABEL CONFIRMA SENHA
let validaConfirmaSenha = false; // VALIDA CONFIRMA SENHA

let msgError = document.querySelector("#msgError");
let msgSucess = document.querySelector("#msgSucess");

// FUNCÃO PARA VALIDAR CAMPO NOME
nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    nome.setAttribute("style", "border-color: red");
    labelNome.innerHTML = `Nome deve conter pelo menos 03 caracteres.`;
    validaNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    nome.setAttribute("style", "border-color: green");
    labelNome.innerHTML = `Nome`;
    validaNome = true;
  }
});

// FUNCÃO PARA VALIDAR USUARIO
usuario.addEventListener("keyup", () => {
  if (usuario.value.length <= 2) {
    labelUsuario.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    labelUsuario.innerHTML = `Usuario deve conter pelo menos 03 caracteres.`;
    validaUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color: green");
    usuario.setAttribute("style", "border-color: green");
    labelUsuario.innerHTML = `Usuário`;
    validaUsuario = true;
  }
});

// FUNCÃO PARA VALIDAR SENHA
senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    labelSenha.innerHTML = `Senha deve conter pelo menos 06 caracteres.`;
    validaSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    senha.setAttribute("style", "border-color: green");
    labelSenha.innerHTML = `Senha`;
    validaSenha = true;
  }
});

// FUNCAO PARA VALIDAR CONFIRMA SENHA
confirmaSenha.addEventListener("keyup", () => {
  if (confirmaSenha.value != senha.value) {
    labelConfirmaSenha.setAttribute("style", "color: red");
    confirmaSenha.setAttribute("style", "border-color: red");
    labelConfirmaSenha.innerHTML = `Senhas não conferem`;
    validaConfirmaSenha = false;
  } else {
    labelConfirmaSenha.setAttribute("style", "color: green");
    confirmaSenha.setAttribute("style", "border-color: green");
    labelConfirmaSenha.innerHTML = `Confirma Senha`;
    validaConfirmaSenha = true;
  }
});

// FUNCÃO PARA CADASTRAR NOVO USUARIO
function cadastrar() {
  if (validaNome && validaUsuario && validaSenha && validaConfirmaSenha) {
   let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');
   
    listaUsuarios.push({
        nomeCadastrado: nome.value,
        usuarioCadastrado: usuario.value,
        senhaCadastrado: senha.value,
    });

    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios))

    msgSucess.setAttribute("style", "display: block");

    setTimeout(()=> {
    document.querySelector('.img-loading').setAttribute("style", 'display: none');
    alert(`Usuário cadastrado com sucesso!`);
    }, 1000)

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = `Porfavor preencha todos os campos corretamente.`;

    setTimeout(() => {
      msgError.setAttribute("style", "display: none");
    }, 3000);
  }
}

// FUNCAO OCULTAR NO CAMPO SENHA
ocultarSenha.addEventListener("click", () => {
  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
});

// FUNCAO OCULTAR NO CAMPO CONFIRMA SENHA
ocultarConfirmaSenha.addEventListener("click", () => {
  if (confirmaSenha.getAttribute("type") == "password") {
    confirmaSenha.setAttribute("type", "text");
  } else {
    confirmaSenha.setAttribute("type", "password");
  }
});
