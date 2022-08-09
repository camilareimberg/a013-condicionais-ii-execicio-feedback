let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();


// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }


switch (nacionalidade) {

    // como colocar opção no masculino também. Tem como colocar ||
    
    case "brasileira":
    //para fazer nesse formato com a variável ${variavel} precisa estar entre crase, aspas simple sou dupla não funciona
    console.log(`Você é ${nacionalidade}. Você é do Brasil!`)
break;
    
    case "argentina": 
    console.log(`Você é ${nacionalidade}. Você é da Argentina`)
    break;
    
    case "uruguaia": 
    console.log(`Você é ${nacionalidade}. Você é do Uruguai`)
        break;
    
    case "chilena": 
    console.log(`Você é ${nacionalidade}. Você é do Chile`)
        break;

    case "colombiana": 
    console.log(`Você é ${nacionalidade}. Você é da Colombia`)
        break;

    default:
    console.log('Nacionalidade não encontrada')
}