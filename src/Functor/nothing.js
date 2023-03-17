const addThree = (value) => {
    return value + 3;
}

Maybe.of(null)      // Nothing
  .map(addThree)    // Nothing