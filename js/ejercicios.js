//Ejercicio 3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicString = epic.reduce((acc, cur) => {
    return `${acc} ${cur}`;
});

console.log(epicString)
