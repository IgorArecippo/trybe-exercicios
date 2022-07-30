//1
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten(array) {
    return array.reduce((acc, curr) => acc.concat(curr), []);
};
// console.log(flatten(arrays));

//array dos exercícios 2, 3 e 4:
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];  

//2
const reduceNames = (array) =>  {
   const names = array.reduce((acc, book, index, array) => {
    if (index === array.length -1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`
   }, '');
   return names.trim()
};
// console.log(reduceNames array));
//pq precisou colocar o `${acc}`

//3
function averageAge(array) {
    const numberOfAuthors = array.length;
    const sumOfAges = array.reduce((sum, age) => (
        sum + (age.releaseYear - age.author.birthYear)
    ), 0);
    return sumOfAges / numberOfAuthors;
};
// console.log(averageAge(books))
// pq precisou colocar () ao inves de {} na declaracao da arrow function do reduce linha 90

//4
function longestNamedBook(array) {
    return array.reduce((biggestBook, currentBook) => {
        if (biggestBook.name.length > currentBook.name.length) return biggestBook;
        return currentBook;
    });
};
// console.log(longestNamedBook(books));

//5
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
    }, 0), 0);
};
// console.log(containsA());

//6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
  }));
  return nameAndAverage
};
console.log(studentAverage())