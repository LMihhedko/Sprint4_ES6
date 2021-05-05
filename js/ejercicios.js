//Ejercicio 4

let string = 'Estoy haciendo un ejercicio'

let reverse = string => {
    let arrayString = [...string]
    let reverseString = arrayString.reverse()
    let joinedString = reverseString.join('')
    return joinedString
}

console.log(reverse(string))