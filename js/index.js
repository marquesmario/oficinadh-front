
var button = document.getElementById('btnLogin');
var username = document.getElementById('username');
var password = document.getElementById('password');

console.log(button);
console.log(username);
console.log(password);

button.preve

const login = '{ "username" = ' + username + ', "password" = ' + password + '}';

function enviarLogin(event, login) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://oficinadh.herokuapp.com/login', true);

    // Envia a informação do cabeçalho junto com a requisição.
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() { // Chama a função quando o estado mudar.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Requisição finalizada. Faça o processamento aqui.
            
        }
    }
    const loginJson = JSON.stringify(login);
    xhr.send(loginJson);
    // xhr.send(new Int8Array()); 
    // xhr.send(document);
    
}

button.addEventListener("click", enviarLogin, false);
