const num = //seu numero aqui
// feito durante a aula

console.log('Prática guiada operador lógico')
const numero= Number(prompt('Digite um número'))

// utilizando operador lógico
if (numero%2===0 && numero%3===0) {
console.log('\n O número É divisível por 2 e por 3');

} else {
    console.log('\n O número NÃO é divisível por 2 e por 3');
}

// utilizando if aninhado
console.log('\n \n Prática guiada if aninhado')
if (numero%2===0) {
    if (numero%3===0) {
        console.log('O número É divisível por 2 e por 3');
    } else {
        console.log('O número NÃO é divisível por 2 e por 3');
    }
    } else {console.log('O número NÃO é divisível por 2 e por 3');
}

//usando o if ternário

console.log('\n \n Prática guiada - if ternário')
console.log(numero===30? 'Ótima opção, 30 é divisível por 2 e por 3' : 'Não foi digitado 30')
