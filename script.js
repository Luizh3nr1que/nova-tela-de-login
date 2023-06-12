const closeForm = document.querySelectorAll('.iconX');

closeForm.forEach((closeIcon) => {
    closeIcon.addEventListener('click', () => {
        const erroRegister = document.querySelector('.erroRegister').style.display = 'none';
        const erroLogin = document.querySelector('.erroLogin').style.display = 'none';
        document.querySelector('.registerConteudo').style.display = 'none';
        document.querySelector('.loginConteudo').style.display = 'none';
    });
});




const abrirForm = document.querySelector('#login')

abrirForm.addEventListener('click', () => {
    document.querySelector('.loginConteudo').classList.add('animationOpacity')
    document.querySelector('.loginConteudo').style.display = 'flex';
})


const buttonTrocarParaRegister = document.getElementById('RegistrarAlternar');
const registerConteudo = document.querySelector('.registerConteudo');
const loginConteudo = document.querySelector('.loginConteudo');

buttonTrocarParaRegister.addEventListener('click', () => {
    if (registerConteudo.style.display === 'none') {
        const erroRegister = document.querySelector('.erroRegister').style.display = 'none';
        const erroLogin = document.querySelector('.erroLogin').style.display = 'none';
        loginConteudo.style.display = 'none';
        registerConteudo.style.display = 'flex';
    }
});


const buttonTrocarParaLogin = document.getElementById('loginAlternar')

buttonTrocarParaLogin.addEventListener('click', () => {
    if (loginConteudo.style.display === 'none') {
        const erroRegister = document.querySelector('.erroRegister').style.display = 'none';
        const erroLogin = document.querySelector('.erroLogin').style.display = 'none';
        registerConteudo.style.display = 'none';
        loginConteudo.style.display = 'flex';
    }
})



const email = document.querySelector('#email');
const buttonLogar = document.querySelector('.logar');
const erroLogin = document.querySelector('.erroLogin');

buttonLogar.addEventListener('click', (e) => {
    if (!email.value.trim() || !email.value.includes('@')) {
        e.preventDefault();
        erroLogin.style.display = 'block';
    } else {
        erroLogin.style.display = 'none';
        window.location.reload();
    }
});





const emailRegister = document.querySelector('.emailInput');
const erroRegister = document.querySelector('.erroRegister');
const registrarButton = document.querySelector('.registrarButton');

registrarButton.addEventListener('click', () => {
    if (!emailRegister.value.trim() || !emailRegister.value.includes('@')) {
        erroRegister.style.display = 'flex';
    } else {
        erroRegister.style.display = 'none';
        window.location.reload();
    }
})

