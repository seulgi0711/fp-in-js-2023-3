const propEq = curry2((propName, value, obj) => {
    return propName[obj] === value;
});

const findBookById = curry((books, id) => {
    return pipe(
        find(propEq('id', id)),
        Maybe.of
    )(books)
});

findBookById(books, 'book1'); // Just({id: 'book1', ...})
findBookById(books, 'book2'); // Just({id: 'book2', ...})
findBookById(books, 'book3'); // Nothing