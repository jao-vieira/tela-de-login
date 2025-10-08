const form = document.getElementById('login');
const cadastrar = document.getElementById('buttoncadastro');
const emailinvalido = document.getElementById('email-invalido');
const senhainvalida = document.getElementById('senha-invalida');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validaremail = regexemail.test(email);
    const validarsenha = senha.length >= 8;

    emailinvalido.textContent = "";
    senhainvalida.textContent = "";

    let campoinvalido = true;

    if(!validaremail){
        emailinvalido.textContent = "Digite um Email válido!.";
        campoinvalido = false;
    }
    if(!validarsenha){
        senhainvalida.textContent = "Digite uma senha válida!.";
        campoinvalido = false;
    }
    if(campoinvalido){
        alert("Login feito com sucesso!")
    }
})

cadastrar.addEventListener('click', function(){
    alert("Redirecionando...");
    window.location.href = "cadastro.html";
})