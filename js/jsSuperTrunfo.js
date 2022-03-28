//CRIAR OBJETOS PARA AS CASTAS
var cartaLuffy = {
    nome: "Monkey D. Luffy",
    imagem: "https://i.pinimg.com/originals/f0/af/cb/f0afcbce7ed4a7df7b822964501bf995.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}
    

var cartaZoro = {
    nome: "Roronoa Zoro",
    imagem: "https://i.pinimg.com/originals/36/c8/b2/36c8b22a9edd4d094cbfed992c9fefca.jpg",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaSanji = {
    nome: "Vinsmoke Sanji",
    imagem: "https://i.pinimg.com/736x/9a/70/92/9a7092f61eb3dcef67d1ca146e0758d0.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaMaquina
var cartaJogador

//Agrupar as 3 cartas para deixa-las numa mesma variável

var cartas = [cartaLuffy, cartaZoro, cartaSanji]
                //0           1          2
function sortearCarta () {
    var numeroCartaMaquina = parseInt(Math.random () * 3)
    //Math.random () * 3 - Sorteia números até 2 com base nas cartas

    cartaMaquina = cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibeCartaJogador ()
}

function exibeCartaJogador () {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'; 

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type = 'radio' name= 'atributo' value='" +
            atributo +
            "'>" +
            atributo + " " + cartaJogador.atributos[atributo] + "</br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

/*
function exibirOpcoes () {
    var opcoes = document.getElementById("opcoes")

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type = 'radio' name= 'atributo' value='" +
            atributo +
            "'>" +
            atributo;
    }
    opcoes.innerHTML = opcoesTexto
}
*/

function obtemAtributoSelecionado () {
    var radioAtributo = document.getElementsByName('atributo')

    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            console.log(radioAtributo[i].value)
            return radioAtributo[i].value
        }
    }
}

function jogar () {
    var divResultado = document.getElementById("resultado")

    var atributoSelecionado =
     obtemAtributoSelecionado()
    console.log(atributoSelecionado)

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        divResultado.innerHTML = "Você venceu a carta da máquina!"
    } else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
        divResultado.innerHTML = "Você perdeu!"
    } else {
        divResultado.innerHTML = "Empate!"
    }
    setTimeout(function () {
        document.getElementById("resultado")
        divResultado.parentNode.removeChild(divResultado)
    },2500)

    document.getElementById("audio").play()

    exibirCartaMaquina()
   
    return;
}

function exibirCartaMaquina () {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type = 'text' name= 'atributo' value='" +
            atributo +
            "'>" +
            atributo + " " + cartaMaquina.atributos[atributo] + "</br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'      
}

