function validateForm(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validateForm(username, password) {
    const email = document.getElementById('correo electrónico').value;
    const password = document.getElementById('contraseña').value;
    let isValid = true;

    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Correo inválido.";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }

    if (password.length < 3) {
        document.getElementById('passwordError').innerText = "La contraseña debe tener al menos 3 caracteres.";
        document.getElementById('passwordError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = "none";
    }

    const loginBtn = document.getElementById('iniciar');
    loginBtn.addEventListener('click', function() {
         window.location.href = 'http://127.0.0.1:3000/paginicio.html';
    })
    return isValid; }
