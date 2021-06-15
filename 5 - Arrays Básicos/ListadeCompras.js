//Exercício: "Lista de Compras".
//Micro desafios
//Crie um array que contenha nomes de produtos para compra.

//Após isso exiba no console os resultados das funções relacionadas aos arrays,
//que são: Join, Pop, Push, Shift, Unshift.
//Também se deve escrever com suas palavras, o que cada função realiza.

let lista = ["Sabonete", "Detergente", "Desinfetante", "Amaciante", "Esponja", "Escova"];

//O metódo join junta os elementos do array.
console.log("Aqui estão todos os elementos do array:", lista.join(" "), "\n");

//O método pop remove o último elemento de um array e o retorna
console.log("Esse foi o elemento removido do array:", lista.pop());
console.log("O novo array após o pop é:", lista, "\n");

//O método push adiciona um elemento a final do array e retorna o novo comprimento.
console.log("O comprimento do array após o push é:", lista.push("Sabão"));
console.log("O novo array após o push é:", lista, "\n");

//O método shift elimina o primeiro elemendo do array e retorna o elemento eliminado.
console.log("O elemento eliminado do array é:", lista.shift());
console.log("O novo array após o shift é:", lista, "\n");

//O método unshift adiciona um elemento no início de array, e retorna o novo comprimento do array.
console.log("O comprimento do array após o unshift é:", lista.unshift("Papel"));
console.log("O novo array após o unshift é:", lista, "\n");

