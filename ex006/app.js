function ligarDesliga(){

    var imagem = document.getElementById('lamp').src;
    var imagem_ligado = 'imagens/lampada-on.jpg';
    var imagem_desligado = 'imagens/lampada.jpg';

    if(imagem == imagem_ligado){
        document.getElementById('lamp').src = imagem_desligado;
    }else{
        document.getElementById('lamp').src = imagem_ligado;
    }

}
document.getElementById("lamp").addEventListener("click", ligarDesliga);