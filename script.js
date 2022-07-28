
//array so com strings
const strings = ['caneta','lapis','regua'];

//array so com numeros
const numeros = [2,13,-78]; 

//array com strings,numeros e boolean
const arraymistos = ['blocodenotas', 4, true];

//array com numero unico
const numerounico = [1984];

//array vazio
const arrayvazio = [];

console.log(strings.length);

// acessando um indece 
console.log(strings[3]);

//verificando se o numero 4 esta dentro do arry
console.log(arraymistos.includes(4));

//imprimindo numero unico
console.log(numerounico[0]);
console.log(numerounico.length);


//pratica guiada
const copiaString = strings

console.log(copiaString);

copiaString.push('agenda')

console.log(copiaString);
//aqui foi feito uma adição no arry, mas foi adicionado tanto na copia como no original

const copiaString2 = copiaString.slice();// usando o metodo slice() e criando uma copia que vc pode manipular sem que interfira no original.

copiaString2.push('agenda');
console.log(copiaString2);

//array ordenado 

const array = [1,58,18,-1,15];
console.log(array);

array.sort();
console.log(array);

array.reverse();
console.log(array);

array.splice(4,1); //remove itens
console.log(array);

array.push(6); // coloca itens
console.log(array);

array.splice(2,1); // remove itens
console.log(array);