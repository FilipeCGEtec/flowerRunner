class Perseguidor {
    constructor(tempoDeEspera, posicaoX, posicaoY){
      this.tempoDeEspera = tempoDeEspera;
      this.posX = posicaoX;
      this.posY = posicaoY;
    }
    Desenhar(){
      ctx.fillStyle = "brown";
      ctx.fillRect(this.posX, this.posY, 50, canvas.height);
    }
    Correr(){
      this.tempoDeEspera = 10000;
      setTimeout(() =>{
      ctx.fillStyle = "black";
        for(this.posX = 0; this.posX < canvas.width + 50; this.posX + 0.1, ctx.fillRect(this.posX, this.posY, 50, canvas.height)){ 
        this.Desenhar();
        console.log(this.posX);
        }
      }, this.tempoDeEspera);
      if(this.tempoDeEspera == 0){
        this.Correr();
      }
        
    }

}