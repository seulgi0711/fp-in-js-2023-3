const concatBooksTitle = curry((book1, book2) => {
    return `${book1.title}, ${book2.title}`;
});

// Maybe 클래스 내부 ap 메소드
ap(maybe) {
    return maybe.map(this.$value);
}

const applicativeResult = Maybe.of(concatBooksTitle)
    .ap(findBookById(books, 'book1'))
    .ap(findBookById(books, 'book2'))
    .getOrElse('invalid book id')

console.log(applicativeResult);
// coding with javascript, speaking javaScript