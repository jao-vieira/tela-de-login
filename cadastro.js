const formcadastro = document.getElementById('cadastro');
const retornar = document.getElementById('buttonvoltar');
const emailerro = document.getElementById('emailerro');
const senhaerro = document.getElementById('senhaerro');
const confirmaremailerro = document.getElementById('erro-email2');
const confirmarsenhaerro = document.getElementById('erro-senha2');

formcadastro.addEventListener('submit', function(event){
    event.preventDefault();

    const emailcadastro = document.getElementById('email').value;
    const confirmaremail = document.getElementById('confirmaremail').value;
    const senhacadastro = document.getElementById('senha').value;
    const senhaconfirmar = document.getElementById('confirmarsenha').value;

    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cadastraremail = regexemail.test(emailcadastro);
    const cadastrarsenha = senhacadastro == senhaconfirmar && senhacadastro.length >= 8;

    emailerro.textContent = "";
    senhaerro.textContent = "";
    confirmaremailerro.Content= "";
    confirmarsenhaerro.textContent = "";

    let campoinvalido = true;

    if(!cadastraremail) {
        emailerro.textContent = "Cadastre um email válido!.";
        campoinvalido = false;
    }
    if(confirmaremail != emailcadastro) {
        confirmaremailerro.textContent = "Por favor, digite Emails iguais!.";
        campoinvalido = false;
    }
    if(!cadastrarsenha) {
        senhaerro.textContent = "Cadastre uma senha válida!.";
        campoinvalido = false;
    }
    if(senhacadastro != senhaconfirmar) {
        confirmarsenhaerro.textContent = "Por favor, digite senhas iguais!."
        campoinvalido = false;
    }
    if (campoinvalido){
        alert("Cadastro Bem-Sucedido");
    }

})

retornar.addEventListener('click', function(){
    window.location.href = "index.html";
})