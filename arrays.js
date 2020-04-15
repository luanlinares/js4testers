//ARRAYS
//var avengers = new Array();
var avengers = ['Homem de Ferro', 'Capitão América','Thor']
console.log(avengers)

avengers.push('Hulk') //Método Push - adiciona itens no array
console.log(avengers)

avengers.push('Homem Aranha')
avengers.pop() //Remove o ultimo registro do Array
console.log(avengers)

avengers.shift() //Remove o primeiro registro do Array
console.log(avengers) 

//Descobrindo o valor do índice do registro
var indice = avengers.indexOf('Homem Aranha')
console.log(indice)
avengers.splice(indice)//Remover um registro de acordo com a posição do array.

avengers.push('Viuva Negra')
avengers.push('Gavião Arqueiro')
console.log(avengers)

var newavengers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

//Concatenar Arrays
var result = avengers.concat(newavengers)
console.log(result)