const addThree = (value) => {
    return value + 3;
}

Maybe.of(2)         // Just(2)
  .map(addThree)    // Just(5)