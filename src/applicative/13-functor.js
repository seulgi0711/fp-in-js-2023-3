const propEq = curry2((propName, value, obj) => {
    return propName[obj] === value;
});

const findBookById = curry((books, id) => {
    return pipe(
        find(propEq('id', id)),
        Maybe.of
    )(books)
});

const concatBooksTitle = curry((book1, book2) => {
    return `${book1.title}, ${book2.title}`;
});

const result = concatBooksTitle(
    findBookById(books, 'book1').getOrElse(null), // {id: 'book1', ...}
    findBookById(books, 'book3').getOrElse(null), // null
); // TypeError: Cannot read property 'title' of null

findBookById(books, 'book1').map((book1) => {
    
});