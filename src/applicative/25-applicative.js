const addThree = (value) => {
    return value + 3;
}

Maybe.of(addThree) // Just(addThree)
    .map(addThreeFn => {
        return addThreeFn(2)
    }); // Just(5)