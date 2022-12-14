function convercao() {
    let dinheiro = document.getElementById("Valor").value
    let litros = parseFloat(dinheiro/5);
    let KMpl = litros*20;

    document.getElementById("resultado").innerHTML = "Você possui "+ dinheiro+" reais e abasteceu "+ litros+ " litros com isso você conseguira andar "+KMpl+" KM";
}