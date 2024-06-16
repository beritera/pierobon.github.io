function calcular() {
    let primeiroNumero = document.getElementById("primeiro_numero").value;
    let segundoNumero = document.getElementById("segundo_numero").value;
    let operacao = document.getElementById("operacao").value;
    let resultado = "";

    let num1 = parseInt(primeiroNumero, 2);
    let num2 = parseInt(segundoNumero, 2);

    switch (operacao) {
        case "adicao":
            resultado = (num1 + num2).toString(2);
            break;
        case "subitracao":
            resultado = (num1 - num2).toString(2);
            break;
        case "multiplicacao":
            resultado = (num1 * num2).toString(2);
            break;
        case "divisao":
            if (num2 !== 0) {
                resultado = Math.floor(num1 / num2).toString(2);
            } else {
                resultado = "Erro: Divisão por zero";
            }
            break;
    }

    document.getElementById("resultado").placeholder = resultado;
}
