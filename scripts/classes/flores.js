class Flor {
    constructor(posicaoX, posicaoY){
      this.posicaoX = posicaoX;
      this.posicaoY = posicaoY;
    }
    DesenharFlor(){
        ctx.beginPath();
        ctx.lineTo((posicaoX - 5), posicaoY);
        ctx.bezierCurveTo((posicaoX - 5), (posicaoY - 10), (posicaoX - 15), (posicaoY - 15), (posicaoX - 20), (posicaoY - 10));
        ctx.bezierCurveTo((posicaoX - 20), (posicaoY - 15), (posicaoX - 5), (posicaoY - 15), (posicaoX - 5), (posicaoY - 10));
        ctx.lineTo((posicaoX - 10), (posicaoT - 20));
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo((posicaoX + 5), posicaoY);
        ctx.bezierCurveTo((posicaoX + 5), (posicaoY + 10), (posicaoX + 15), (posicaoY + 15), (posicaoX + 20), (posicaoY + 10));
        ctx.bezierCurveTo((posicaoX + 20), (posicaoY + 15), (posicaoX + 5), (posicaoY + 15), (posicaoX + 5), (posicaoY + 10));
        ctx.lineTo((posicaoX + 10), (posicaoT + 20));
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo((posicaoX - 5), (posicaoY - 15));
        ctx.lineTo(posicaoX, (posicaoY - 5));
        ctx.lineTo((posicaoX + 5), (posicaoY + 15));
        ctx.lineTo(posicaoX, (posicaoY + 5));
        ctx.closePath();
    }
    ColetarFlor(){
      this.delete();
      this.GerarPonto();
    }
    GerarPonto(){
        Jogo.Flores += 1;
        Jogo.AtualizarPontuacao();
    }
  }