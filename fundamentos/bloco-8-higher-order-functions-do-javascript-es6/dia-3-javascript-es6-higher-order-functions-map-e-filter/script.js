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

//1
const formatedBookNames = (books) => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// console.log(formatedBookNames(books));

//2
function nameAndAge(books) {
   return books.map((book) => ({
    autor: book.author.name,
    age: book.releaseYear - book.author.birthYear
   })).sort((book1, book2) => book1.age - book2.age);
};
// console.log(nameAndAge(books));

//3
const fantasyOrScienceFiction = (books) => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
// console.log(fantasyOrScienceFiction(books));

//4
const oldBooksOrdered = (books) => books.filter((book) => 2022 - book.releaseYear >= 60).sort((book1, book2) => book1.releaseYear - book2.releaseYear);
// console.log(oldBooksOrdered(books));

//5
const fantasyOrScienceFictionAuthors = (books) => {
    const filteredBooks = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
    return filteredBooks.map((book) => book.author.name).sort();
};
console.log(fantasyOrScienceFictionAuthors(books));