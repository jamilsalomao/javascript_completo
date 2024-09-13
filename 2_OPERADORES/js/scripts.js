// 1 - Number
 console.log(typeof 2);
 console.log(typeof -127);

 // 2 - Ops. aritméticas
 console.log(2 + 4);
 console.log(8 * 3);
 console.log(12 / 4);

 console.log(5 + 4 * 2);

 // 3 - Special numbers
 console.log(typeof Infinity);

 console.log(typeof -Infinity);

 console.log(12 * "asd");

 console.log(typeof NaN);

 console.log("Hello, World!");
 console.log(`Mais um texto`);
 console.log(`13`);

 console.log(typeof "Um texto");
 console.log(typeof `Mais um texto`);

// 5 - Símbolos especiais em string
console.log("Testando a \nquebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi," + "tudo" + " bem?" );
console.log(`Testando ` + `com ` + `crase!`);

// 7 - Interpolação (Tem que ser feito com `crase`)
console.log(`A soma de 2 + 2 é: ${2 + 2}!`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Booleans
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5); //menor igual

console.log(5 < 5); // menor

console.log(10 == 10); // igual

console.log(10 == 9); // igual

console.log(10 != 9); // diferente

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 !== "9");

// 11 -  Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 <10);

console.log(5 > 2 && "Jamil" === 1);

console.log(5 > 2 || "Jamil" === 1); //or

console.log(5 < 2 || 5 > 100 );

console.log(!true);

console.log(!5 > 2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);

console.log(null === undefined); // não são identicos por que o tipo não é igual

console.log(null == undefined); // mas são iguais por ter ausencia de valor

console.log(null == false);

console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);