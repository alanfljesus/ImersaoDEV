function mediaBimestre() {
    var nome = document.getElementById("nome").value

    var pNota = Number(document.getElementById("nota1").value)
    var sNota = Number(document.getElementById("nota2").value)
    var tNota = Number(document.getElementById("nota3").value)
    var qNota = Number(document.getElementById("nota4").value)

    console.log(nome)
    console.log(pNota) //Primeira nota
    console.log(sNota) //Segunda nota
    console.log(tNota) //Terceira nota
    console.log(qNota) //Quarta nota

    var elementoMensagem = document.getElementById("mensagem") //Pega o PARAGRÁFO/ELEMENTO de id="mensagem"do HTML


    // IF = E se/se, porém se... / Se algo for < do que 0...

    if (pNota < 0 || sNota < 0 || tNota < 0 || qNota < 0 || pNota > 10 || sNota > 10 || tNota > 10 || qNota > 10) {
        mensagem = "Ops! Algo deu errado; digite notas entre 0 à 10"; //Mensagem que vai sair no paragráfo
        elementoMensagem.innerHTML = mensagem;

        setTimeout(function () {
            var mensagem = document.getElementById("mensagem")

            mensagem.style = "display:none"

        }, 2000);
    }

    console.log(mensagem)

    console.log(resultado)

    var media = ((pNota + sNota + tNota + qNota) / 4);

    var saida = document.getElementById("resultado")

    if (media >= 6 && media <= 10) {
        resposta = nome + ", sua média é " + media.toFixed(2) + "<br> <strong>APROVADO(A)!</strong>";
        saida.innerHTML = resposta;
    } else {
        resposta = nome + ", sua média é " + media.toFixed(2) + "<br> <strong>REPROVADO(A)!</strong>";
        saida.innerHTML = resposta;
    }
}

//else = OUTRO