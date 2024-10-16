let idade = 0;
switch (idade) {
    case (idade >= 0 && idade <= 12):
        console.log("Criança");
        break;
    case (idade >= 13 && idade <= 17):
        console.log("Adolescente");
        break;
    case (idade >= 18 && idade <= 59):
        console.log("Adulto");
        break;
    case (idade >= 60):
        console.log("Idoso");
        break;
    default:
        console.log("Idade inválida.");
}