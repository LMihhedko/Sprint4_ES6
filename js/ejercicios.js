//Ejercicio 6

//Resultat final ha de ser un array només amb noms de les tasques

let tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
];

//forEach()
let taskNames = [];

tasks.forEach(a => {
    a.name
    taskNames.push(a.name);
});

console.log(taskNames)

//map()
let namesMap = tasks.map(a => a.name);
console.log(namesMap)
