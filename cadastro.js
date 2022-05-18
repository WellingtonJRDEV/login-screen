let nome = document.querySelector('#name')
let labelNome = document.querySelector('#labelName')
let validNome = false

let usuario = document.querySelector('#userName')
let labelUsuario = document.querySelector('#labelUserName')
let validUsuario = false

let senha = document.querySelector('#password')
let labelSenha = document.querySelector('#labelPassword')
let validSenha = false

let confirmaSenha = document.querySelector('#confirmPassword')
let labelConfirmaSenha = document.querySelector('#labelConfirmPassword')
let validConfirmaSenha = false

let msgError = document.querySelector('#msgError')

let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *insira no mínimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 4) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *insira no mínimo 5 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmaSenha.addEventListener('keyup', () => {
  if (confirmaSenha.value !== senha.value) {
    labelConfirmaSenha.setAttribute('style', 'color: red')
    labelConfirmaSenha.innerHTML = 'Confirmar senha *as senhas não conferem'
    confirmaSenha.setAttribute('style', 'border-color: red')
    validConfirmaSenha = false
  } else {
    labelConfirmaSenha.setAttribute('style', 'color: green')
    labelConfirmaSenha.innerHTML = 'Confirmar senha'
    confirmaSenha.setAttribute('style', 'border-color: green')
    validConfirmaSenha = true
  }
})

function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmaSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push({
      nomeCad: nome.value,
      usuarioCad: usuario.value,
      senhaCad: senha.value
    })

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'Cadastrando usuário...'
    msgError.innerHTML = ''
    msgError.setAttribute('style', 'display: none')
    setInterval(() => {
      window.location.href = './index.html'
    }, 3000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML =
      'Preencha todos os campos corretamente antes de cadastrar!'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
