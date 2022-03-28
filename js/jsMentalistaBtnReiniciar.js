var numeroSecreto = parseInt(Math.random() * 10 + 1);
var numeroTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var elementoInstrucao = document.getElementById("instrucao");
  var elementoErrou = document.getElementById("errou");
  var chute = parseInt(document.getElementById("valor").value);

  elementoInstrucao.style.backgroundColor = "#ff2401";
  elementoResultado.style.backgroundColor = "#008000";
  elementoErrou.style.backgroundColor = "#00ced1";

  if (numeroTentativas <= 0) {
    elementoErrou.innerHTML = "Você errou 3 vezes, tente novamente.";
    setTimeout(function () {
      elementoErrou.style.display = "none";
    }, 2000);
    return;
  }

  if (chute === numeroSecreto) {
    --numeroTentativas;
    elementoResultado.innerHTML = "Parabéns, você venceu!";
  } else if (chute > 10 || chute < 0) {
    elementoInstrucao.innerHTML = "Ops! Apenas números de 0 à 10";
    elementoInstrucao.style.display = "block";
    setTimeout(function () {
      elementoInstrucao.style.display = "none";
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

  document.addEventListener("keydown", (event) => {
    const { key } = event;
    if (key.toLowerCase() === "s") {
      location.reload();
    }
  });
}

function reiniciar() {
  numeroSecreto = parseInt(Math.random() * 10 + 1);
  numeroTentativas = 3; // reinicia o número de tentativas //
  resultado.innerHTML = ""; // zera o resultado apresentado em tela //
  instrucao.innerHTML = "";
  valor.value = ""; // zera o input inserido //
}
