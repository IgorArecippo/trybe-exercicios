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

//2
const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray){
        if (word.length > maxLength){
            result = word
        }
    }
    return result;
}
console.log(longestWord('o canalha tem a senha que te deixa fraquinha o canalha tem a senha q te deixa fraquinha'));

//4.1
const replaceX = (name) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1){
        if (fraseArray[index] === 'x'){
            fraseArray[index] = name;
        }
    }
    return fraseArray.join(' ');
};

//4.2
const newString = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let result = `
    ${func}
    
    Minhas três principais habilidades são:`;

    skills.forEach((skill) =>{
        result = `${result}
        - ${skill}`;
    });
    return result;
}

console.log(newString(replaceX('Igor')));