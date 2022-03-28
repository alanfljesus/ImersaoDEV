var numeroSecreto = parseInt(Math.random() * 10 + 1);
var numeroTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var elementoInstrucao = document.getElementById("instrucao");
  var elementoErrou = document.getElementById("errou");

  var chute = parseInt(document.getElementById("valor").value);

  if (numeroTentativas <= 0) {
    elementoErrou.innerHTML = "Você esgotou suas tentativas, tente novamente.";
    setTimeout(function () {
      location.reload(1);
    }, 3000);
    return;
  }
  if (chute === numeroSecreto) {
    --numeroTentativas;
    elementoResultado.innerHTML = "Parabéns, você venceu!";
    setTimeout(function () {
      location.reload(1);
    }, 4500);
    // 4.5 segundos para recarregar a página e iniciar o jogo novamente
  } else if (chute > 10 || chute < 0) {
    elementoErrou.innerHTML = "Ops! Apenas números de 0 à 10";
    elementoErrou.style.display = "block";
    setTimeout(function () {
      elementoErrou.style.display = "none";
    }, 2000);
  } else if (chute > numeroSecreto) {
    --numeroTentativas;
    elementoInstrucao.innerHTML =
      "ERROU! Tente novamente com um numero menor! <br>Lhe restam " +
      numeroTentativas +
      " tentativas";
    elementoInstrucao.style.display = "block";
    setTimeout(function () {
      elementoInstrucao.style.display = "none";
    }, 2000);

    // Componente 'SnackBar'
  } else if (chute < numeroSecreto) {
    --numeroTentativas;
    elementoInstrucao.innerHTML =
      "ERROU! Tente novamente com um numero maior! <br>Lhe restam " +
      numeroTentativas +
      " tentativas";
    elementoInstrucao.style.display = "block";
    setTimeout(function () {
      elementoInstrucao.style.display = "none";
    }, 2000);
  }
}
