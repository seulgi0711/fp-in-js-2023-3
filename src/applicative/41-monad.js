//
const persons = [
    { name: 'John', age: 27 },
    { name: 'Doe', age: 31 },
]

// findPerson :: Person[] -> string -> Maybe<Person>
const findPerson = curry((persons, name) => {
    return Maybe.of(persons.find(person => {
        return person.name === name;
    }));
});

Maybe.of('Doe') // Just('Doe')
    .chain(findPerson(persons))
    // Just({ name: 'Doe', age: 31 })