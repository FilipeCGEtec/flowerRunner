class Espinho {
  constructor(tipo, posicaoX, posicaoY){
    this.tipo = tipo;
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
  }
  DesenharEspinho(){
    if(this.tipo == 1){
      ctx.beginPath();
      ctx.lineTo((posicaoX - 5), posicaoY);
      ctx.lineTo(posicaoX, (posicaoY - 10));
      ctx.lineTo((posicaoX + 5), posicaoY)
      ctx.lineTo(posicaoX, posicaoY);
    }else{
      ctx.beginPath();
      ctx.lineTo(posicaoX, (posicaoY - 5));
      ctx.lineTo((posicaoX - 5), (posicaoY - 5));
      ctx.lineTo(posicaoX, (posicaoY - 15));
      ctx.lineTo((posicaoX + 5), (posicaoY - 5))
      ctx.lineTo((posicaoX + 15), posicaoY);
      ctx.lineTo((posicaoX + 5), (posicaoY + 5));
      ctx.lineTo(posicaoX, (posicaoY + 15));
      ctx.lineTo((posicaoX - 5), (posicaoY + 5));
      ctx.lineTo((posicaoX - 15), posicaoY);
      ctx.lineTo((posicaoX - 5), (posicaoY - 5));
    }
  }
  AlterarPosicao(){
    for(i = 0; i < 4; i--){
      if (posicaoY > (posicaoY + 10)){
        posicaoY -= 1;
      }else{
        posicaoY += 1;
      }
    }
  }
}
