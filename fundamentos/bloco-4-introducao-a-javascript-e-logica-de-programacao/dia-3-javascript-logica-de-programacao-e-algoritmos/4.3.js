/*1
let answer = 10
for (let i = answer; i >= 1; i -= 1) {
    answer = i * answer;
};
console.log(answer);

2
let word = 'tryber';
let word2 = '';
for (i = word.length - 1; i >= 0; i -= 1) {
    word2 += word[i];
}
console.log(word2);

3
let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let i = 0; i < array.length; i += 1){
    if (array[i].length > maiorPalavra.length){
        maiorPalavra = array[i];
    }
}

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i];
    }
}
 console.log(maiorPalavra);
 console.log(menorPalavra);

 4
let maiorPrimo = 0;
for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
    let isPrime = true;
    for (currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        maiorPrimo = currentNumber;
    }
}
console.log(maiorPrimo);*/