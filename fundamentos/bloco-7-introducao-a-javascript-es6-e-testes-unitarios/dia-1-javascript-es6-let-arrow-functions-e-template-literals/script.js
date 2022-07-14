//PARTE 1
//1
const testingScope = (escopo) => {
     if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}
testingScope(true);

//2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortFunction = (a, b) => (a - b)
oddsAndEvens.sort(sortFunction);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`)

//PARTE 2
//1
//forma iterativa:
const factorial = (number) => {
    let result = 1
    for (index = 2; index <= number; index += 1){
        result *= index
    }
    return result;
}
console.log(factorial(7))
//forma recursiva:
const fatorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(fatorial(3))