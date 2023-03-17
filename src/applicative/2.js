const propEq = curry2((propName, value, obj) => {
    return propName[obj] === value;
});

const findBookById = curry((books, id) => {
    return Maybe.of(books.find(propEq('id', id)))
});