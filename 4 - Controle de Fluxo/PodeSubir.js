//Exercício: "Pode Subir"
//Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
//1) Crie uma função podeSubir() que receba dois parâmetros:
//      -Altura da pessoa
//      -se está acompanhada.
//Deve retornar um valor booleano (TRUE,FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
//      a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
//      b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
//      c) Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

//Variáveis referentes a altura e se a pessoa está acompanhada.
let altura = 1.3;
let acompanhante = true;

//Função que retorna TRUE ou FALSE dependendo se a pessoa pode subir ou não
function podeSubir(condA,condB)
{
    let condicao=null;

    if (condA>=1.4 && condA<=2)        
    {
        condicao = true;
    }    
    else if (condA<1.4 && condA>=1.2 && condB==true)
    {
        condicao = true;
    }
    else
    {
        condicao = false;
    }

return condicao;
}

//Imprimindo o valor booleano retornado usando as variáveis para informar a altura e status de acompanhamento.
console.log(podeSubir(altura,acompanhante));


//2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo, 
//dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
//      a) Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
//      b) Em caso de impedimento, exiba a mensagem: “Acesso negado.”

function podeSubir2(condA,condB)
{    

    if (condA>=1.4 && condA<=2)        
    {
        console.log("Acesso autorizado");
    }    
    else if (condA<1.4 && condA>=1.2 && condB==true)
    {
        console.log("Acesso autorizado somente com acompanhante");
    }
    else
    {
        console.log("Acesso Negado");
    }
}
//Chamando a função alterada para exibir a mensagem.
podeSubir2(altura,acompanhante);



