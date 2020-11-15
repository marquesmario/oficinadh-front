
var button = document.getElementById('logar');
var username = document.getElementById('username');
var password = document.getElementById('password');



function logar(event) {
    event.preventDefault();
   
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://oficinadh.heroku.com/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            xhr.response;
            console.log(xhr.response);
        }
    }
    const login = '{ "username" : "' + username.value + '", "password" : "' + password.value + '"}';
    xhr.send(login);
    // window.location.href = 'cliente.html';
}



console.log(button);

button.addEventListener("click", logar, false);