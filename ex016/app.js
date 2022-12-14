function resultado(){
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var culpado =0;
    var inocente =0;

    if (q1== "sim") {
        culpado++
    }else if(q1 == "nao"){
        inocente++
    }

    if (q2== "sim") {
        culpado++
    }else if(q2 == "nao"){
        inocente++
    }

    if (q3== "sim") {
        culpado++
    }else if(q3 == "nao"){
        inocente++
    }

    if (q4== "sim") {
        culpado++
    }else if(q4 == "nao"){
        inocente++
    }

    if (q5== "sim") {
        culpado++
    }else if(q5 == "nao"){
        inocente++
    }

    if (culpado <=1){
        document.getElementById("resultado").innerHTML = "Inocente"
    }else if(culpado == 2){
        document.getElementById("resultado").innerHTML = "Suspeito"
    }else if(culpado >=3 && culpado <=4){
        document.getElementById("resultado").innerHTML = "Cumplice"
    }else if(culpado==5){
        document.getElementById("resultado").innerHTML = "Assasino"
    }

}