function embaralhar (lista){
    let indice_aleatorio;


    for(let i = lista.length; -1,i !==0; i--){
        indice_aleatorio = Math.floor(Math.random()* i);

        valorTemporario = lista[i];
        lista[1] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valorTemporario;
    }
    return lista;
}


let cartas = document.querySelectorAll(".carta");
let cartaVirada = null;




let imagensSalvas =["imagem1.jpg","imagem2.jpg","imagem3.jpg","imagem4.jpg","imagem5.jpg","imagem6.jpg","imagem7.jpg","imagem8.png"];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i = 0; i< cartas.length;i++){
    cartas[i].style.backgroundImage =`url("imagens/${imagens[i]}")`;
}

setTimeout(function(){
    for(let carta of cartas){
        carta.style.backgroundImage = `url("imagens/fundo.png")`;
        carta.onclick = function(){

            if(cartaVirada && cartaVirada.id !==carta.id){
             if(cartaVirada.style.backgroundImage === carta.style.backgroundImage){
                 cartaVirada = null;
                 cartaVirada.onclick = null;
                 carta.onclick = null;
             }
             else{
                 carta.style.backgroundImage = `url("imagens/fundo.png")`;
             }
            }
            else{
            carta.style.backgroundImage = `url("imagens/${imagens[Number (carta.id)]}")`;  
            cartaVirada = carta;
        }
        }
    }
    
} ,3000);

