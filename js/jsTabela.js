//{ } - USADO PARA REFERENCIAS UM TIPO DE OBJETO
// Usar chave. valor. -> para chamar se usar console.log(rafa.vitorias) ele vai mostrar apenas o numero de vitorias

var alan = {
    nome:"Alan",
    vitorias:2,
    empates:0,
    drrotas:0,
    pontos: 0
    }
var felipe = {
    nome: "Felipe",
    vitorias: 0, 
    empates: 0, 
    derrotas: 2,
    pontos: 0}


//executar função 

var resultadoDosPontos = calculaPontos(alan)

alan.pontos = calculaPontos(alan) 
felipe.pontos = calculaPontos(felipe) 

function calculaPontos(jogador) {

    var pontos = (jogador.vitorias * 3) + jogador.empates

    return pontos;
}

var jogadores = []


function exibeJogadoresNaTela () {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates +"</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</ tr >"
    }   

    var tabelaJogadores = 
    document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento;
}

//No javascript nao pode ter aspas duplas dentro de aspas duplas, por isso deixa-se aspas simples dentro de aspas duplas

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    var mensagemVitoria = document.querySelector(".vitoria")

    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)

}

function adicionarEmpate(i) {
    var mensagemEmpate = document.querySelector(".empate")

    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)

}

function adicionarDerrota(i) {
    var mensagemDerrota = document.querySelector(".derrota")

    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);

}

function adicionarJogador () {
    var jogador = document.querySelector("#novoJogador");
    jogadores.push({
        nome: novoJogador.value,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    })
    exibeJogadoresNaTela(jogadores);
}

function removerJogador () {
    jogadores = [];
    exibeJogadoresNaTela(jogadores);
}

function limparPontos () {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
}
    exibeJogadoresNaTela(jogadores);
}

function validacao () {

}