function revelar(){
    var altura =  parseFloat(document.getElementById("altura").value)
    var peso =  parseFloat(document.getElementById("peso").value)
    var imc = peso/(altura*altura)

    if(imc <=18.5){
        document.getElementById("resultado").innerHTML = imc.toFixed(2)+" Você esta abaixo do peso"
    }else if(imc >18.5 || imc<=25){
        document.getElementById("resultado").innerHTML = imc.toFixed(2)+" Você esta com o peso normal"
    }else if(imc>25 || imc<=30){
        document.getElementById("resultado").innerHTML = imc.toFixed(2)+" Você esta Acima do peso"
    }else if(imc>=30){
        document.getElementById("resultado").innerHTML = imc.toFixed(2)+" Você esta Obeso"
    }
}