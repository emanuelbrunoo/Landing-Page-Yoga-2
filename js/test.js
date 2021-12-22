/*
const form = document.querySelector("#formulario");
console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault();
    
})

const submite = document.querySelector("#submite"); 

*/

const pessoa = {
    nome: 'Emanuel',
    sobrenome: 'Silva',
    idade: 28,
    endereço: {
        rua: 'São Vitalino',
        numero: 125,
        Bairro: 'Jardim São Judas Tadeu'
    }
};

const {nome, sobrenome, idade, endereço} = pessoa;
console.log(endereço)
