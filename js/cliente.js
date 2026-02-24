async function carregarAnimais(){

const resposta = await fetch(API);

const animais = await resposta.json();

const lista = document.getElementById("listaAnimais");

lista.innerHTML = "";

animais.forEach(animal => {

lista.innerHTML += `

<div class="card">

<img src="${animal.imagem}">

<h3>${animal.nome}</h3>

<p>${animal.preco}</p>

<p>${animal.descricao}</p>

<button onclick="comprar(${animal.id})">

Comprar

</button>

</div>

`;

});

}

function comprar(id){

alert("Compra realizada: " + id);

}

carregarAnimais();
