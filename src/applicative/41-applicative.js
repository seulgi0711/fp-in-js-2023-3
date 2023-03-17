//
// add :: number -> number -> number
const multiply = curry((num1, num2) => {
    return num1 * num2;
});

Maybe.of(multiply) // Just(multiply)
    .ap(Maybe.of(2)) // Just((num2) => 2 * num2)
    .ap(Maybe.of(3)) // Just(6);