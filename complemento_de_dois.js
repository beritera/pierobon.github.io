function inverterBits(binario) {
    let invertido = '';
    for (let i = 0; i < binario.length; i++) {
        invertido += binario[i] === '0' ? '1' : '0';
    }
    return invertido;
}

function adicionarUm(binario) {
    let resultado = '';
    let carregar = 1;

    for (let i = binario.length - 1; i >= 0; i--) {
        let bit = parseInt(binario[i]);
        let soma = bit + carregar;
        if (soma === 2) {
            resultado = '0' + resultado;
            carregar = 1;
        } else {
            resultado = soma.toString() + resultado;
            carregar = 0;
        }
    }

    if (carregar === 1) {
        resultado = '1' + resultado;
    }

    return resultado;
}

function converter_complemento_dois() {
    let binario = document.getElementById("numero_binario").value;

    if (!/^[01]+$/.test(binario)) {
        document.getElementById("resultado_complemento_dois").innerText = "Erro: Entrada inválida";
        return;
    }

    let invertido = inverterBits(binario);
    let complementoDeDois = adicionarUm(invertido);

    document.getElementById("resultado_complemento_dois").placeholder = complementoDeDois;
}
