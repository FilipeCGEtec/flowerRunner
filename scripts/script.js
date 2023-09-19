const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth; //1810
const height = canvas.height = window.innerHeight; //912
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function plataforma(x1, y1){
    ctx.fillStyle = "purple";
    ctx.fillRect(x1, y1, 170, 20);
    const flor = new Flor();
    flor.posicaoX = x1;
    flor.posicaoY = y1;
    flor.DesenharFlor(x1 + 85, y1 - 10);
}



const avatar = new Personagem(30, 1, 30);
const game = new Jogo();
const spike = new Espinho();
const stalker = new Perseguidor();
spike.tipo = false;
game.flores = 0;
plataforma(400, 750);
plataforma(1110, 750);
plataforma(755, 600);
plataforma(400, 450);
plataforma(1110, 450);
avatar.trava = [400, 1110, 755];

avatar.perX = 30;
avatar.perY = 730;
avatar.Desenhar(avatar.perX, avatar.perY);
console.log(avatar.parX);
console.log(avatar.perY);

document.addEventListener("keypress", function(e){
    avatar.Andar(e.key);
    if(e.key === "w"){
        avatar.tecla = e.key;
        console.log(avatar.tecla);
    }else{
        avatar.tecla = null;
    }
    console.log(avatar.tecla);
    avatar.Pular();
});
stalker.posX = -50;
stalker.posY = 450;
//stalker.Correr();
avatar.Pular();