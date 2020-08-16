/* Lana Mattedi Grassi tem 24 anos, pesa 86 kg
Tem 1.73 de altura e tem o IMC de ....
E seu ano de nascimento é 1996. 
*/

const nome = 'Lana';
const nomeCompleto = 'Mattedi Grassi';
let idade = 24;
let peso = 86;
const altura = 1.73;
let imc;
let anoNascimento;

//Calculando IMC e ano de nascimento:
imc = peso/(altura*altura);
anoNascimento = 2020 - idade ;

//Mostrando na tela:
console.log(nome,nomeCompleto, 'tem',idade,'anos, pesa',peso,'kg' );
console.log (`Tem ${altura} de altura e tem o IMC de ${imc}`); //Outro jeito 
console.log ('E seu ano de nascimento é',anoNascimento,'.');
