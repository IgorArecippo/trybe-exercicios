//Bônus
const searchEmployee = require('./bônus');

describe('testa a funçao searchEmployee', () => {
    it('testa se éuma função', () => {
        expect(typeof searchEmployee).toEqual('function');
    });
    
    it('testa se searchEmployee(id, "fisrtName") retorna o primeiro nome do usuário da id identificada', () => {
        const actual = searchEmployee('8579-6', 'firstName');
        const expected = 'Ana';

        expect(actual).toBe(expected);
    });
    
    it('testa se searchEmployee(id, "lastName") retorna o útimo nome do usuário da id identificada', () => {
        const actual = searchEmployee('5569-4','lastName');
        const expected = 'Jobs';

        expect(actual).toEqual(expected);
    });
    
    it('testa se searchEmployee(id, "specialties") retorna um array com as habilidades do usuário da id identificada', () => {
        const actual = searchEmployee('4456-4', 'specialities')
        
        expect(actual).toContain('Context API', 'RTL', 'Bootstrap')
    });

    it('testa se um erro com a mensagem "ID não identificado" é retornado quando a ID não existir', () => {
        expect(() => {searchEmployee('1256-8', 'specialities')}).toThrow();
    });

    it('testa a mensagem de erro para ID inexistente', () => {
        expect(() => {searchEmployee('1256-8', 'specialities')}).toThrowError(new Error("ID não identificado"));
    });

    it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
        expect(() => {searchEmployee()}).toThrow();
    });

    it('testa a mensagem de errro para informacao inexitente', () => {
        expect(() => {searchEmployee('4678-2', 'shift')}).toThrowError(new Error('Informação indisponível'));
    });
})