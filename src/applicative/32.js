const addThree = (value) => {
    return value + 3;
}

Maybe.of(addThree).ap(Maybe.of(2)) === Maybe.of(2).map(addThree)