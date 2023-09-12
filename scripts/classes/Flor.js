class Flor {
    constructor(posicaoX, posicaoY){
      this.posicaoX = posicaoX;
      this.posicaoY = posicaoY;
    }
    DesenharFlor(posicaoX, posicaoY){
        ctx.beginPath();
        ctx.lineTo((posicaoX - 50), posicaoY);
        ctx.bezierCurveTo((posicaoX - 50), (posicaoY - 100), (posicaoX - 150), (posicaoY - 150), (posicaoX - 200), (posicaoY - 100));
        ctx.bezierCurveTo((posicaoX - 200), (posicaoY - 150), (posicaoX - 50), (posicaoY - 150), (posicaoX - 50), (posicaoY - 100));
        ctx.lineTo((posicaoX - 100), (posicaoT - 200));
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo((posicaoX + 50), posicaoY);
        ctx.bezierCurveTo((posicaoX + 50), (posicaoY + 100), (posicaoX + 150), (posicaoY + 150), (posicaoX + 200), (posicaoY + 100));
        ctx.bezierCurveTo((posicaoX + 200), (posicaoY + 150), (posicaoX + 50), (posicaoY + 150), (posicaoX + 50), (posicaoY + 100));
        ctx.lineTo((posicaoX + 100), (posicaoT + 200));
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo((posicaoX - 50), (posicaoY - 150));
        ctx.lineTo(posicaoX, (posicaoY - 50));
        ctx.lineTo((posicaoX + 50), (posicaoY + 150));
        ctx.lineTo(posicaoX, (posicaoY + 50));
        ctx.closePath();
    }
    ColetarFlor(){
      this.delete();
      this.GerarPonto();
    }
    GerarPonto(){
        Jogo.flores += 1;
        Jogo.AtualizarPontuacao();
    }
}