function somaValores() {
    var n1 = document.getElementById("numberOne").value;
    var n2 = document.getElementById("numberTwo").value;

    var result = parseInt(n1) + parseInt(n2);
    
    var divResultado = document.getElementById("resultado");

    divResultado.append("O resultado da soma é: " + result);
    
    console.log(result)
}       

//DOM - Document Object Mode
//Representa as marcações do HTML lidas pelo navegador e exibidas para o usuario.

//Estrutura do DOM
// html => Página
// h1 => Cabeçalhos ou titulos
// p => paragrafos
// ul => Agrupadores de Listas
// li => itens de listas do elemento ul
// a => link 
//form => formularios
//input => campos para inserir informações de diversos tipos:
    //texto => Campo para digitação de texto
    //check => checkbox
    //radio => botões de radio

//textarea => area de texto (paragrafos maiores)
//button => botoes
//spam => elementos genericos
//tables => Tabelas
//tds => Colunas
//divs => Divisões
//labels => textos 

//=============================================================================