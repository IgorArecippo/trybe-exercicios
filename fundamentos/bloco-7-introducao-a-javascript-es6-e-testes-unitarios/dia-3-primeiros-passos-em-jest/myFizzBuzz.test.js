//3
const myFizzBuzz = require('./myFizzBuzz')

describe('testa a funçã0 myFizzBuzz', () => {
    it('verifica se de acordo com o valor recebido retorna o esperado', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
        expect(myFizzBuzz(10)).toEqual('buzz');
        expect(myFizzBuzz(9)).toEqual('fizz');
        expect(myFizzBuzz(1)).toEqual(1);
        expect(myFizzBuzz('9')).toEqual(false);
    })
})