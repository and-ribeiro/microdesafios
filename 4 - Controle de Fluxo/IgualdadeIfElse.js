//Exercício: "Igualdade, if e else".
//Crie um variável chamada linguagem, que terá uma string atribuída a ela em seguida, construa uma condicional if/else
//para que, se a variável estiver armazenando o valor "javascript", ela deva imprimir no console, o texto:"Estou aprendendo".
//Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".

let linguagem = "javascript";

//Criando uma função para verificar a string
function verificador()
{
    if (linguagem == "javascript")
    {
        console.log("Estou aprendendo");
    }
    else
    {
        console.log("Aprenderei mais tarde");
    }
}

//Verficando a primeira vez com javascript como string
verificador();

//Mudando a string
linguagem = "outralinguagem";

//Checando mais uma vez se o resultado é diferente
verificador();