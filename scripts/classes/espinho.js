class Espinho {
  constructor(tipo, posicaoX, posicaoY){
    this.tipo = tipo;
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
  }
  DesenharEspinho(posicaoX, posicaoY){
    if(this.tipo == true){
      ctx.beginPath();
      ctx.lineTo((posicaoX - 5), posicaoY);
      ctx.lineTo(posicaoX, (posicaoY - 10));
      ctx.lineTo((posicaoX + 5), posicaoY)
      ctx.lineTo(posicaoX, posicaoY);
      ctx.fillStyle = "gray";
      ctx.fill();
      ctx.closePath()
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
      ctx.fillStyle = "gray";
      ctx.fill();
      ctx.closePath()
      ctx.fillRect((posicaoX - 5), (posicaoY - 5), 5, 5)
      this.AlterarPosicao();
    }
  }
  AlterarPosicao(){
    if(this.tipo == false){
      for(i = 0; i < 4; i--){
        if (posicaoY > (posicaoY + 10)){
          posicaoY -= 1;
        }else{
          posicaoY += 1;
        }
      }
    }
  }
}
