class Personagem {
  constructor(posicaoX, velocidade, posicaoY){
    this.posicaoX = posicaoX;
    this.velociadade = velocidade;
    this.posicaoY = posicaoY;
  }
  Morrer(x, y){
    if(this.posicaoX == x || this.posicaoY == y){
      Jogo.Flores = 0;
    }
  }
  Andar(){
    if(event.keyCode == 68) {
        this.posicaoX += 1;
      }else if (event.keyCode == 65) {
        this.posicaoX -= 1;
    }
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
  Desenhar(){
    ctx.beginPath();
    ctx.fillRect(posicaoX, posicaoY, (posicaoX + 2), (posicaoY + 2));
    ctx.stroke();
  }
}
