function convercao(){
    var valorGanho = document.getElementById("valor").value
    var horasTrabalhadas = document.getElementById("horas").value
    var impostoDeRenda = 11
    var inss = 8
    var sindicato = 5
    
    var valorBruto = (valorGanho * horasTrabalhadas).toFixed(2)
    var calculoImposto = (valorBruto * impostoDeRenda /100).toFixed(2)
    var calculoInss = (valorBruto * inss /100).toFixed(2)
    var calculoSindicato = (valorBruto * sindicato /100).toFixed(2)

    var valorLiquido = (valorBruto - calculoImposto - calculoInss - calculoSindicato).toFixed(2)

    document.write("O valor bruto é de R$", (valorBruto) + "<br>")
    document.write("--------------------------------------------" + "<br>")
    document.write("Os descontos são:" + "<br>")
    document.write("Imposto de Renda : R$",(calculoImposto) + "<br>")
    document.write("INSS:              R$",(calculoInss) + "<br>")
    document.write("Sindicato:         R$",(calculoSindicato) + "<br>")
    document.write("--------------------------------------------" + "<br>")
    document.write("O valor liquido é de R$", (valorLiquido) + "<br>")
}