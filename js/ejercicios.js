//Ejercicio 8

window.onload = () => document.getElementById('button').addEventListener('click', makeTable);


let makeTable = () => {
    let number1 = parseInt(document.getElementById('number1').value)
    let number2 = parseInt(document.getElementById('number2').value)
    let span = document.getElementById('table')
    span.innerHTML = '';

    if (number1 > 10 && number2 > 10) {
        span.innerHTML='Número 1 y 2 tienen que ser del 1 al 10';

    } else if (number2 > 10) {
        span.innerHTML='Número 2 tiene que ser del 1 al 10';

    }else if (number1 > 10) {
        span.innerHTML='Número 1 tiene que ser del 1 al 10';

    }else if (isNaN(number1) || isNaN(number2)) {
        span.innerHTML='Por favor, introduzca un número';
    }else {

        let table = document.createElement('table');
        for(i = 1; i<= number2; i++) {
            let tr = document.createElement('tr');   

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');

            let n1 = document.createTextNode(number1);
            let x = document.createTextNode('x');
            let n = document.createTextNode(i);
            let total = document.createTextNode('=');
            let result = document.createTextNode(number1 * i);

            td1.appendChild(n1);
            td2.appendChild(x);
            td3.appendChild(n);
            td4.appendChild(total);
            td5.appendChild(result);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            table.appendChild(tr);
        }   
        span.appendChild(table);  
    }

}

makeTable();