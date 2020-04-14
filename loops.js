//LOOPS - LAÇOS DE REPETIÇÃO

//For - Movido por declaração
for(a=0; a<10; a++){

    console.log(`Repetindo por que ${a} é menor que 10`)
}

//While
var i = 0

while (i <= 10) {
    console.log(`Repetindo por que ${i} é menor ou igual a 10`)
    i++
}

//FOR IT - Trabalha com Arrays

var avengers = ["IronMan", "SpiderMan", "Thor","Captain America", "Hulk", "Black Panther"]

avengers.forEach(function(value, key){
    console.log(`${value} na posição ${key}`)
}) 
