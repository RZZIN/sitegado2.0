document.getElementById("formAnimal")

.addEventListener("submit", async function(e){

e.preventDefault();

const animal = {

nome: document.getElementById("nome").value,

preco: document.getElementById("preco").value,

descricao: document.getElementById("descricao").value,

imagem: document.getElementById("imagem").value

};

await fetch(API, {

method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify(animal)

});

alert("Cadastrado!");

});
