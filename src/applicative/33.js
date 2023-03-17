const concatBooksTitle = curry((book1, book2) => {
    return `${book1.title}, ${book2.title}`;
});

const monadResult = findBookById(books, 'book1').chain((book1) => {
    return findBookById(books, 'book2').chain((book2) => {
        return concatBooksTitle(book1, book2);
    })
}).getOrElse('invalid book id')

console.log(monadResult);
// coding with javascript, speaking javaScript