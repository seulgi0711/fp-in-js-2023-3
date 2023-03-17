const propEq = curry2((propName, value, obj) => {
    return propName[obj] === value;
});

const findBookById = curry((books, id) => {
    return pipe(
        find(propEq('id', id)),
        Maybe.of
    )(books)
});

const concatBooksTitle = curry((maybeBook1, maybeBook2) => {
});

findBookById(books, 'book1').chain((book1) => {
    return findBookById(books, 'book2').chain((book2) => {
        return concatBooksTitle(book1, book2);
    })
}).getOrElse('invalid book id')