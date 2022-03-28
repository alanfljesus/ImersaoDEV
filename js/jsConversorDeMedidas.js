function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = Number(valorElemento.value);
    console.log(valor);

    var valorEmReal = valor * 0.0000000000001057;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = valor + "km em ano-luz é igual a " + valorEmReal;

    elementoValorConvertido.innerHTML = valorConvertido;

    document.getElementById("Sol");
    var distancia = 150000000 * 0.0000000000001057;
    console.log(distancia);

    var distanciaSolConvertida = document.getElementById("Sol");
    var sol = "A distância do Sol para a Terra em ano-luz é igual a " + distancia;

    distanciaSolConvertida.innerHTML = sol;
}
