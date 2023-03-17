const concatBooksTitle = curry((book1, book2) => {
    return `${book1.title}, ${book2.title}`;
});

const liftA2 = curry((fn, af1, af2) => {
    return af1.map(fn).ap(af2);
})

const applicativeResult = Maybe.of(concatBooksTitle)
    .ap(findBookById(books, 'book1'))
    .ap(findBookById(books, 'book2'))
    .getOrElse('invalid book id')

const applicativeResult2 = liftA2(
    concatBooksTitle,
    findBookById(books, 'book1'),
    findBookById(books, 'book2')
).getOrElse('invalid book id')