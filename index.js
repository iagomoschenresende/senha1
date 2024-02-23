document.getElementById('verificarSenha').addEventListener('click', function () {
    var senha = document.getElementById('senhaInput').value;
    if (senha === '56789') {
        window.location.href = 'pag.html';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
});
