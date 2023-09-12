const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "blue"
ctx.fillRect(0, (canvas.height / 1.3), canvas.width, (canvas.height / 1.2));

function plataforma(x1, y1, x2, y2){
    ctx.fillRect(x1, y1, x2, y2);
};

const avatar = new Personagem();
const flor = new Flor();
const game = new Jogo();
const spike = new Espinho();
const stalker = new Perseguidor();
 
