//Ejercicio 7

let makeTable = () => {

    let number1 = prompt('Introduce número 1');
    let number2 = prompt('Introduce número 2');

    if (number1 <= 10 && number2 <= 10) {
        for(i = 1; i<=number2; i++) {
            let result = number1 * i;

            console.log(`${number1} x ${i} = ${result}`); 
        }
    }else {
        console.log('Introduce un número del 1 al 10');
    }

}

makeTable()