// 1 - variáveis
let nome = "Jamil";

console.log(nome);

nome = "Jamil Salomão"

console.log(nome);

const idade = 21;

console.log(idade);

// idade = 21;

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variáveis
// let 2teste = "inválido"

// let @teste = "inválido"

let a = 10, 
b = 20, 
c = 30;

console.log(a,b,c);

const nomecompleto = "Jamil Salomão";

const nomeCompleto = "Ronald Junior";

console.log(nomecompleto);

console.log(nomeCompleto);

let $teste = "ok";

let _teste = "ok";

console.log($teste, _teste);

// 3 - prompt
// const age = prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// 4 - alert
// alert("Testando");

// const z = 10

// alert(`O número é ${z}`)

// 5 - math
console.log(Math.max(5,3,7,0));

console.log(Math.floor(5.45));

console.log(Math.ceil(5.14));

// 6 - console
console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "Ronald"

if(user === "Ronald") {
    console.log("Seja Bem-vindo!");
}

if(user === "Maria") {
    console.log("Seja Bem-vinda!");
}

console.log(user === "Ronald", user === "Maria");

// 8 - else
const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10
const w = 25

if(q > 5 && w >20) {
    console.log("Números são mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - else if
if(1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Jamil"
const userAge = 21

if(userName === "Ronald") {
    console.log("Bem vindo Ronald!")
} else if (userName === "Jamil" && userAge === 21) {
    console.log("Bem vindo Jamil, você tem 21 anos!");
} else {
    console.log("Nenhuma condição aceita!");
}

// 10 - while

 

