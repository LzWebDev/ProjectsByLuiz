function toggleForm() {

    const title = document.getElementById("form-title");//titulo do formulário
    const form = document.getElementById("form");//formulario do html
    const cadastroFields = document.getElementById("cadastro-fields");// div onde tem nome completo, data de nascimento e cpf
    const repeatPassword = document.getElementById("repeat-password"); //repetir a senha
    const toggleText = document.querySelector(".toggle");//botão de "ja tem uma conta?"
    
    if (title.innerText === "Cadastro") {
        title.innerText = "Login";
        cadastroFields.style.display = "none";
        repeatPassword.style.display = "none";
        toggleText.innerText = "Não tem uma conta? Cadastre-se";
    } else {
        title.innerText = "Cadastro";
        cadastroFields.style.display = "block";
        repeatPassword.style.display = "block";
        toggleText.innerText = "Já tem uma conta? Faça login";

    }
}

const name = document.getElementById("name")
const age = document.getElementById("age")
const cpf = document.getElementById("cpf")
const email = document.getElementById("email")
const senha = document.getElementById("password")