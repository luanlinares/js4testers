//CONTROLES DE FLUXO
var idade = prompt("Qual a sua idade?")
    if (idade >=18) {
        console.log("Liberado para ir ao show de Rock!")
    } else if (idade >=12){
        console.log("Permissão Negada para show de Rock")
    } else {
        console.log("Permissão negada para qualquer show")
    }

var ingresso = prompt("Qual o tipo de ingresso?")
switch (ingresso) {
    case "Vip":
        console.log("Entrada permitida para o camarote")
    break

    case "Premium":
        console.log("Entrada permitida para pista premium")
    break

    case "Pista":
        console.log("Entrada permitida para pista comum")
    break

    default:
        console.log("Tipo de ingresso inválido")
    break

}