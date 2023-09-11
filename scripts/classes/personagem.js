class Personagem {
  constructor(posicaoX, velocidade, posicaoY){
    this.posicaoX = posicaoX;
    this.velociadade = velocidade;
    this.posicaoY = posicaoY;
  }
  Morrer(){
    Jogo.Flores = 0;
  }
  Andar(){
    posicao += 0.1;
  }
  Pular(){
    if(event.keyCode == 32) {
      for(i = 0; i < 5; i++){
        this.posicaoY = this.posicaoY + 5 - i;
      }
    }
  }
  ColetarFlor(){
    if((this.posicaoX == Flor.posicaoX + 1 || this.posicaoX == Flor.posicaoX - 1) && (this.posicaoY == Flor.posicaoY + 1 || this.posicaoY == Flor.posicaoY - 1)){
      Flor.ColetarFlor();
    }
  }
}
