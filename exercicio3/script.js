//código a ser reescrito com o if ternário

nome = prompt("Digite o sue nome")
idade = Number(prompt("Digite a sua idade"))

console.log('Utilizando o if')
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

// resolução com o if ternário

console.log('\n \n If ternário')
console.log(nome==="José"? 'Oi, Zé!' : `Olá ${nome}`)

console.log(idade>=18? 'Você já pode tirar carteira de motorista!' : 'Aguardar mais um pouco. Você ainda não pode tirar carteira de motorista')