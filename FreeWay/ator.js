//código do ator

let xDoAtor = 100;
let yDoAtor = 366;
let larguradoAtor = 30;
let alturadoAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xDoAtor, yDoAtor, larguradoAtor, alturadoAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yDoAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yDoAtor += 3;
    }
  }
}

function verificaColisao(){
//collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0; i < imagemCarros.length; i = i +1){
      colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xDoAtor, yDoAtor, larguradoAtor, alturadoAtor );
    if (colisao){
      voltaAtorParaPosicaoInicial();
      sonDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yDoAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 400, 60));
  text(meusPontos, width/5, 27);
  
}

function marcaPontos(){
  if (yDoAtor < 15){
    meusPontos += 1;
    sonDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yDoAtor < 366;
}