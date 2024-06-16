function converter() {
    let numeroInserido = document.getElementById("numero_inserido").value;
    let baseEntradaSelecionada = parseInt(document.getElementById("base_entrada_selecionada").value);
    let baseSaidaSelecionada = parseInt(document.getElementById("base_saida_selecionada").value);
    let resultado = "";

    let decimalNumber = parseInt(numeroInserido, baseEntradaSelecionada);

    resultado = decimalNumber.toString(baseSaidaSelecionada).toUpperCase();

    document.getElementById("resultado_conversor").placeholder = resultado;
}
