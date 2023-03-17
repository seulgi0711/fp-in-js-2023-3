const addThree = (value) => {
    return value + 3;
}

class Maybe {
    // ...

    ap(maybe) {
        return maybe.map(this.$value);
    }
}

Maybe.of(addThree)  // Just(addThree)
  .ap(Maybe.of(2)); // Just(5)

Maybe.of(2)         // Just(2)
    .map(addThree); // Just(5)