//
// add :: number -> number -> number
const add = curry((num1, num2) => {
    return num1 + num2;
});

Maybe.of(2)         // Just(2)
    .map(add(3))    // Just(5)