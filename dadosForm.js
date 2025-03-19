document.getElementById("form").addEventListener("submit", function(event){

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const cpf = document.getElementById("cpf").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const repeatPassword = document.getElementById("repeat-password").value

    //validar cpf
    const ValidarCPF = (cpf) =>  {

        cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            return false; // Verifica se tem 11 dígitos ou se todos são iguais
        }

        let soma = 0, resto;

        // Calcula o primeiro dígito verificador
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf[i]) * (10 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf[9])) return false;

        soma = 0;

        // Calcula o segundo dígito verificador
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf[i]) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;

        return resto === parseInt(cpf[10]);
    }
    
    if(ValidarCPF(cpf) === false){
        alert("CPF inválido")
        return
    }

    //verificar se as senhas são iguais
    if(password !== repeatPassword){
        alert("As senhas tem que ser iguais.")
        return
    }

    const DadosPessoa = {
        name: name,
        age: age,
        cpf: cpf,
        email: email,
        password: password
    }


})

