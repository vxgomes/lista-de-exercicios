function Tabuada() {
    let numeros = document.getElementById("numero").value
    let contador =0
    
    while (contador<=10) {
        let total = parseInt(numeros)*contador
        document.getElementById("resposta").innerHTML += numeros +"x"+ contador + "=" + total+"<br>"
        contador++
        console.log(total)
    }
}