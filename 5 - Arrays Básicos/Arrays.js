//Exercício: "Arrays".

//1. Criar um arquivo arrays.js que contenha o código:
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];

//3. Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados. 
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];

//5.Um dos desenvolvedores avisou que a última animação é na verdade um jogo, então remova esse último elemento do array de desenhos animados (cartoons)
//antes de passá-los para os filmes.
cartoons.pop();

//4.No mesmo arquivo, crie este array e uma função que adiciona cada elemento do array de desenhos animados (cartoons) ao array de filmes. 
function adicionar()
{
    filmes.push(cartoons);
}

adicionar();

console.log(filmes);
console.log(filmes.join());