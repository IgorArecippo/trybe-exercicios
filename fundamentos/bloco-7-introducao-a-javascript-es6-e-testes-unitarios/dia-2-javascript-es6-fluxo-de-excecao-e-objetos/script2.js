//PARTE 3
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//1
const addNigth = (obj, key, value) => {
    obj[key] = value;
}
addNigth(lesson2, 'turno', 'noite');
console.log(lesson2);

//2

