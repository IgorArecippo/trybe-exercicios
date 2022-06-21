/*1
const a = 5;
const b = 15;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

2
const c = 10;
const d = 20;

if (c > d) {
    console.log("c maior que d");
} else {
    console.log("d maior que c");
} 


3
const e = 30;
const f = 31;
const g = 32;

if (e > f && e > g){
    console.log('e maior número');
} else if (f > e && f > g){
    console.log('f maior número');
} else{
    console.log('g maior número');
}

4
const valor = 0;
if (valor > 0){
    console.log('positive');
} else if (valor < 0) {
    console.log('negative');
} else {
    console.log('zero');
};

5
const anguloA =65;
const anguloB = 100;
const anguloC = 15;

let somaDosAngulos = anguloA + anguloB + anguloC;

let todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC >> 0;

if (todosAngulosPositivos){
    if (somaDosAngulos == 180){
        console.log ('true');
    } else {
        console.log('false');
    };
} else {
    console.log ('Erro: ângulo inválido');
}

6
let peça = 'Torre';

switch (peça.toLowerCase()){
    case 'bispo': console.log('Bispo -> Diagonal');
        break;
    case 'rei': cosole.log('Rei -> Uma casa para qualquer direçao');
        break;
    case 'rainha': console.log('Rainha -> Diagonal,horizontal e vertical');
        break;
    case 'torre': console.log('Torre -> Horizontal e vertical');
        break;
    case 'cavalo': console.log('Cavalo -> "L", pode pulas peças');
        break;
    case 'peão': console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas');
        break;
    default: console.log('Erro: peça inválida');
}

7
const nota = 93;
const notaValida = nota >= 0 && nota <= 100;
if (notaValida) {
    if (nota >= 90) {
        console.log('conceito A');
    } else if (nota >= 80) {
        console.log('conceito B');
    } else if (nota >= 70) {
        console.log('conceito C');
    } else if (nota >= 60) {
        console.log('conceito D');
    }    else if (nota >= 50) {
        console.log('conceito E');
    } else if (nota < 50) {
        console.log('conceito F');
    }
} else {
    console.log('ERRO')
};

8
const x = 1;
const y = 9;
const z = 5;
const temPar = x % 2 === 0 || y % 2 === 0 || z % 2 === 0;
if (temPar === true) {
    console.log ('true')
} else {
    console.log('false')
};

9*/
const x = 2;
const y = 6;
const z = 4;
const temImpar = x % 2 !== 0 || y % 2 !== 0 || z % 2 !== 0;
if (temImpar === true) {
    console.log ('true')
} else {
    console.log('false')
};