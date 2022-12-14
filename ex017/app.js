function revelar(){
    var sexo = document.getElementById("sexo").value;
    var altura =  parseFloat(document.getElementById("altura").value)
    var resultado = 0;

    if (sexo == "homem"){
        resultado = (72.7*altura)-58;
        document.getElementById("resultado").innerHTML = "seu peso ideal é: "+resultado.toFixed(2);
    }else if(sexo == "mulher"){
        resultado = (62.1*altura)-44.7;
        document.getElementById("resultado").innerHTML = "seu peso ideal é: "+ resultado.toFixed(2);
    }
}