document.getElementById('salvar').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    document.getElementById('resultado1').textContent = `Nome: ${nome}`;
    document.getElementById('resultado2').textContent = `Idade: ${idade}`;
});