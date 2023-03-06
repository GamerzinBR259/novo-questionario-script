function resp1() {

    var resp1 = "Fico feliz em te conhecer "

    var nome = document.getElementById("nome").value;

    document.getElementById("resp1").innerHTML = resp1 + nome;

}

function resp2() {

    var resp2 = "Que interessante você querer "

    var vida = document.getElementById("vida").value;

    document.getElementById("resp2").innerHTML = resp2 + vida;

}

function resp3() {

    var resp3 = "Entendo.. Mas seja o que acontecer, espero que dê tudo certo a você! "

    document.getElementById("resp3").innerHTML = resp3;

}

function resp4() {

var fruta = document.getElementById("fruta").value;

var resp4 = "Que legal! Maçãs fazem bem a saúde, mas como sou um bot, não posso comer maçãs reais :(";
var resp5 = "Uma pena você não gostar de maçãs, mas espero que você coma outras frutas saudáveis! :D";
var resp6 = "Eu não compreendo sua resposta, poderia repeti-la de outra forma por favor?";

if (fruta == "S"||fruta == "s"||fruta == "sim"||fruta == "Sim")
{ document.getElementById("resp4").innerHTML = resp4; }

else if (fruta == "N"||fruta == "n"||fruta == "não"||fruta == "Não"|| fruta == "Nao"|| fruta == "nao") 
{ document.getElementById("resp4").innerHTML = resp5; }

else { document.getElementById("resp4").innerHTML = resp6; }
}