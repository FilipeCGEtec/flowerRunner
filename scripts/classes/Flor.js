class Flor {
    constructor(posicaoX, posicaoY){
      this.posicaoX = posicaoX;
      this.posicaoY = posicaoY;
    }
    DesenharFlor(posicaoX, posicaoY){
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.lineTo((posicaoX - 5), posicaoY);
        ctx.bezierCurveTo((posicaoX - 5), (posicaoY - 10), (posicaoX - 15), (posicaoY - 15), (posicaoX - 20), (posicaoY - 10));
        ctx.bezierCurveTo((posicaoX - 20), (posicaoY - 15), (posicaoX - 5), (posicaoY - 15), (posicaoX - 5), (posicaoY - 10));
        ctx.lineTo((posicaoX - 10), (posicaoY - 20));
        ctx.lineTo(posicaoX, posicaoY);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.lineTo((posicaoX + 5), posicaoY);
        ctx.bezierCurveTo((posicaoX + 5), (posicaoY - 10), (posicaoX + 15), (posicaoY - 15), (posicaoX + 20), (posicaoY - 10));
        ctx.bezierCurveTo((posicaoX + 20), (posicaoY - 15), (posicaoX + 5), (posicaoY - 15), (posicaoX + 5), (posicaoY - 10));
        ctx.lineTo((posicaoX + 10), (posicaoY - 20));
        ctx.lineTo(posicaoX, posicaoY);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.lineTo((posicaoX - 5), (posicaoY - 15));
        ctx.lineTo(posicaoX, (posicaoY - 5));
        ctx.lineTo((posicaoX + 5), (posicaoY - 15));
        ctx.lineTo(posicaoX, posicaoY);
        ctx.fill();
        ctx.closePath();
    }
    ColetarFlor(){
      Personagem.call(this, perX, perY);
      if((this.perX <= this.posicaoX + 1 && this.perX <= this.posicaoX + 1) && (this.perY <= this.posicaoY + 1 && this.perY <= this.posicaoY + 1)){
        ctx.fillStyle = "black";
        ctx.fillRect(this.posicaoX - 20, this.posicaoY - 20, this.posicaoX + 20, this.posicaoY + 20);
        this.GerarPonto();
      }
    }
    GerarPonto(){
        game.flores += 1;
        game.AtualizarPontuacao();
    }
}