

var button = document.getElementById('requisicao');
var produtos;

var div = document.getElementById('lista');


function getProdutos(event) {
    console.log('entrou');
    event.preventDefault();
    var xhr = new XMLHttpRequest()
   
    xhr.open("GET", "https://oficinadh.heroku.com/produtos", true);

    xhr.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            console.log(xhr.response);
            produtos = JSON.parse(xhr.response);
            
            
            for(var cont = 0; cont < produtos.length; cont++){
                var li1 = document.createElement('li');
                var li2 = document.createElement('li');
                var li3 = document.createElement('li');
                
                div.appendChild(li1);
                div.appendChild(li2);
                div.appendChild(li3);
               
                li1.innerText = produtos[cont].nome;
                li2.innerText = produtos[cont].estoque;
                li3.innerText = produtos[cont].preco;
               
            }
            
        }
    }

    xhr.send()
}
    var nomeProduto = document.getElementById('nome');

   
    
    

button.addEventListener("click", getProdutos, false);
