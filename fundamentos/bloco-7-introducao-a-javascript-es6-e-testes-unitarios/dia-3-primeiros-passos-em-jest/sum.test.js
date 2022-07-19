//1
const sum = require('./sum.js')

describe('testa a função sum', () => {
    it('deve retornar o resultado da soma', () => {
        expect(sum(4, 5)).toEqual(9);
        expect(sum(0, 0)).toEqual(0);
    });
    it('deve lançar um erro quando passada string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');

    })
})
