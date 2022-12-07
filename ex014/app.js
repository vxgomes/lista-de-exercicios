function permitido(){
    let idade = document.getElementById("idade").value
    
    if (idade>=18) {
        document.getElementById("resposta").innerHTML = "você pode dirigir"
    }else{
        document.getElementById("resposta").innerHTML = "você não pode dirigir"
    }
        
    }
