//código das imagens e sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let sonDaTrilhaSonora;
let sonDaColisao;
let sonDoPonto;


function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-2.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

  sonDaTrilhaSonora = loadSound("sons/trilha.mp3");
  sonDaColisao = loadSound("sons/colidiu.mp3");
  sonDoPonto = loadSound("sons/pontos.wav");

}