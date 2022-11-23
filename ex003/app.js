function Somar(){
    let n1 = document.getElementById("numero1").value
    let n2 = document.getElementById("numero2").value
    let total = parseFloat(n1) + parseFloat(n2)
    document.getElementById("resposta").innerHTML = total
}
