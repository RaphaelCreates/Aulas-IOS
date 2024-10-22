function converterparaeuro() {
    let valoremreais = parseFloat(prompt("digite o valor em reais"))
    let taxacambio = 5.57;
    let valoreuros = valoremreais / taxacambio
    return valoreuros.toFixed(2)
}
alert(converterparaeuro())