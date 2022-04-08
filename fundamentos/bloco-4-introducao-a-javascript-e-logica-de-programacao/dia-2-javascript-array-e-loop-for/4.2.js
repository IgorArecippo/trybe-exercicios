let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 /*1:
for(let i = 0; i < numbers.length; i += 1){

2
let soma = 0;
for(let i =0; i < numbers.length; i += 1){
    soma += numbers[1];
};
console.log(soma);

3; 4 
let soma = 0;
for(let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
};
let media = soma / numbers.length;

if(media > 20){
    console.log('valor maior que 20');
} else{
    console.log('valor menor ou igual a 20');
};

5
let maiorNumero = numbers[0];
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    }
};
console.log(maiorNumero);

6*/
let valoresImpares = 0;

for( let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0){
        valoresImpares += 1;
    }
}
if (valoresImpares === 0){
    console.log ('nenhum valor ímpar encontrado');
} else {
    console.log (valoresImpares)
}