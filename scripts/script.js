const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
var teclas = {};
var codigo;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "blue";
ctx.fillRect(0, (canvas.height / 1.3), canvas.width, (canvas.height / 1.2));

document.addEventListener("keydown", function(tecla){
    delete teclas[tecla.keyCode];        
});

document.addEventListener("keyup", function(tecla){
    teclas[tecla.keyCode] = true;
    codigo = tecla.keyCode;
    console.log(codigo);
});


function plataforma(x1, y1, x2, y2){
    ctx.fillRect(x1, y1, x2, y2);
}
const avatar = new Personagem();
const flor = new Flor();
const game = new Jogo();
const spike = new Espinho();
const stalker = new Perseguidor();

var x = avatar.posicaoX;
var y = avatar.posicaoY;
x = 30;
y = 30;
avatar.Desenhar(x, y);
avatar.Andar(codigo);
avatar.Pular(codigo);