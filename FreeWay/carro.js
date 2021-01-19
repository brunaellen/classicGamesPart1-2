//código otimizado do carro utilizando listas[]

let xCarros = [600, 600, 600, 600, 600, 600];
let posicaoXInicialDosCarros = 600;
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeDosCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = 50;
let alturaCarros = 40;


//function mostraCarro ()
function mostraCarro (){
  for(let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeDosCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < xCarros.length; i++){
    if (passouDaTela(xCarros[i])){
    xCarros[i] = posicaoXInicialDosCarros;
    }
  }
}

function passouDaTela(xCarros){
  return xCarros < - 50;
}

