function validateForm(event){
    return false;
}

function validateUser(username, password){
    const message = document.getElementById('message');

    const validUsername = 'correo electrónico';
    const validPassword = '123';

    if(validUsername === username && validPassword === password) {
        message.textContent = 'Inicio de sesión exitoso';
        message.style.color = 'green';
        window.location.href = 'paginicio.html'; 

        } else { 
            message.textContent = 'Usuario o contraseña incorrectos';
            message.style.color = 'red';
        }
}