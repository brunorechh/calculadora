

var numero=0

function botao0(){
    numero = document.getElementById("b0").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b0").onclick=botao0

function botao1(){
    numero = document.getElementById("b1").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b1").onclick=botao1

function botao2(){
    numero = document.getElementById("b2").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b2").onclick=botao2

function botao3(){
    numero = document.getElementById("b3").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b3").onclick=botao3

function botao4(){
    numero = document.getElementById("b4").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b4").onclick=botao4

function botao5(){
    numero = document.getElementById("b5").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b5").onclick=botao5

function botao6(){
    numero = document.getElementById("b6").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b6").onclick=botao6

function botao7(){
    numero = document.getElementById("b7").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b7").onclick=botao7

function botao8(){
    numero = document.getElementById("b8").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b8").onclick=botao8

function botao9(){
    numero = document.getElementById("b9").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b9").onclick=botao9


// --------------------------operações-----------------------------------
function botaomais(){
    numero = document.getElementById("b+").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b+").onclick=botaomais

function botaomenos(){
    numero = document.getElementById("b-").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b-").onclick=botaomenos

function botaodividido(){
    numero = document.getElementById("b/").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b/").onclick=botaodividido

function botaovezes(){
    numero = document.getElementById("b*").innerText
    document.getElementById("display").value+=numero
}

document.getElementById("b*").onclick=botaovezes


// ----------------------------calcular----------------------------------
function botaocalcular() {
numero = document.getElementById("display").value
numero = eval(display.value);
document.getElementById("display2").value= numero
}

document.getElementById("calcular").onclick=botaocalcular


function botaoapagar(){
    numero = document.getElementById("bCE").innerText
    document.getElementById("display").value=""
     document.getElementById("display2").value=""
}
document.getElementById("bCE").onclick=botaoapagar


