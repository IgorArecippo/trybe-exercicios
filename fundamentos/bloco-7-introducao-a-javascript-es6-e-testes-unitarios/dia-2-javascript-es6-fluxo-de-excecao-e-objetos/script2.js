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
const listKey = (obj) => Object.keys(obj);
console.log(listKey(lesson1));

//3
const keysLength = (obj) => Object.keys(obj).length;
console.log(keysLength(lesson2));

//4
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson3));

//5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//6
const numberStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        total += obj[array[index]].numeroEstudantes
    }
    return total;
}
console.log(numberStudents(allLessons))

//7
const getValue = (obj, number) => Object.values(obj)[number];
console.log(getValue(lesson3, 2));

//8
