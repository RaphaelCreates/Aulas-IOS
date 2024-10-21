let precoProduto = prompt("Informe o valor do produto:");
let codigoPromocional = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4, DESC5):").toUpperCase();
let desconto = 0;
switch (codigoPromocional) {
    case "DESC1":
        desconto = 0.05; // 5% de desconto
        alert("05% de desconto aplicado.");
        break;
    case "DESC2":
        desconto = 0.10; // 10% de desconto
        alert("10% de desconto aplicado.");
        break;
    case "DESC3":
        desconto = 0.15; // 15% de desconto
        alert("15% de desconto aplicado.");
        break;
    case "DESC4":
        desconto = 0.20; // 20% de desconto
        alert("20% de desconto aplicado.");
        break;
    case "DESC5":
        desconto = 0.25; // 25% de desconto
        alert("25% de desconto aplicado.");
        break;
    default:
        alert("Erro: código promocional inválido.");
        return; // Finaliza o programa se o código for inválido
}


let valorDesconto = precoProduto * desconto;
let valorComDesconto = precoProduto - valorDesconto;

console.log(`Valor original do produto: R$ ${precoProduto.toFixed(2)}`);
console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);