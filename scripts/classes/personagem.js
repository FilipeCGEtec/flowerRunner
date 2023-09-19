class Personagem {
  constructor(posicaoX, velocidade, posicaoY, pulo, tecla, trava){
    this.perX = posicaoX;
    this.vel = velocidade;
    this.perY = posicaoY;
    this.tecla = tecla;
    this.trava = trava;
    this.pulo = pulo;
  }
  
  Morrer(posX, posY){
    if(x == posX || y == posY){
      Jogo.call(this, flores);
      this.flores = 0;
    }
  }

  Andar(direcao){
    if(this.perX >= this.trava){
      this.perX = this.trava - 3;
    }else if(this.peX >= 1800){
      this.perX = 1707;
    }else if(direcao === "d") {
      ctx.fillStyle = "black";
      ctx.fillRect(avatar.perX, avatar.perY, 35, 35);
      this.vel = 4;
      this.perX += this.vel;
      console.log(this.perX);
      this.Desenhar(this.perX, this.perY);
      return;
    }else if (direcao === "a") {
      ctx.fillStyle = "black";
      ctx.fillRect(avatar.perX, avatar.perY, 35, 35);
      this.vel = -4;
      this.perX += this.vel;
      console.log(this.perX);
      this.Desenhar(this.perX, this.perY);
      return;
    }
  }
  Pular(){
    if(this.tecla != null){
      for(this.pulo = 5; this.pulo > -5; this.pulo--){
      ctx.fillStyle = "black";
      ctx.fillRect(avatar.perX, avatar.perY, 35, 35);
      this.perY -= this.pulo;
      console.log(this.perY);
      this.Desenhar(this.perX, this.perY);
    }
    }
  }
  Desenhar(x, y){
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, 35, 35);
  }
}
