function resultado() {
    // Solicita a altura e o peso ao usuário
    let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    let peso = parseFloat(prompt("Digite seu peso em kg (ex: 70):"));

    // Verifica se os valores são válidos
    if (isNaN(altura) || isNaN(peso)) {
        return "Por favor, insira valores válidos!";
    }
    

    // Calcula o IMC (Índice de Massa Corporal)
    let imc = peso / (altura * altura);

    // Retorna o IMC calculado com uma mensagem
    return `Seu IMC é ${imc.toFixed(2)}`;
}

// Exibe o resultado usando alert
alert(resultado());
