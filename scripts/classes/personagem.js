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
  Andar(direcao){
    if(direcao == 68) {
        this.posicaoX += 10;
      }else if (direcao == 65) {
        this.posicaoX -= 10;
    }
  }
  Pular(tecla){
    if(tecla == 32) {
      for(i = 0; i < 5; i++){
        this.posicaoY = this.posicaoY + 5 - i;
      }
    }
    this.posicaoY =- 1;
  }
  ColetarFlor(){
    if((this.posicaoX == Flor.posicaoX + 1 || this.posicaoX == Flor.posicaoX - 1) && (this.posicaoY == Flor.posicaoY + 1 || this.posicaoY == Flor.posicaoY - 1)){
      Flor.ColetarFlor();
    }
  }
  Desenhar(posicaoX, posicaoY){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect((posicaoX + 1), (posicaoY + 1), (posicaoX + 1), (posicaoY + 1));
  }
}
