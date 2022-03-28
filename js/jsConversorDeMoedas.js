function converterDolar() {
    var valorReal = +document.getElementById("valor").value;
    var conversaoDolar = valorReal * 5;
    var elemento = (document.getElementById("valorConvertido").innerHTML =
        "A conversão em dolar é " + conversaoDolar);
}

function converterEuro() {
    var valorReal = +document.getElementById("valor").value;
    var conversaoEuro = valorReal * 5.5;
    var elemento = (document.getElementById("valorConvertido").innerHTML =
        "A conversão em euro é " + conversaoEuro);
}
