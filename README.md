# flowerRunner

<img src="https://i.ytimg.com/vi/-YOOjdk6cpQ/maxresdefault.jpg">
Oque é o projeto?
Este projeto deito na linguagem de JavaScript é um jogo feito com base na música "Flores e o Louco" do cantor Fabio Brazza.

# Tecnologias-usadas
Java Script
HTML

# Estado
Em progresso

Processo de desenvolvimento

# Documentação:

## Casos de Uso:

  <img src="Imagens/Captura%20de%20Tela%20(23).png">
  <img src="Imagens/Captura%20de%20Tela%20(25).png">
  
## UML:

  <img src="Imagens/Casosflor.png">
  
  ### Definições das classes:
  
  #### Personagem
  
| Métodos  | Definição |
| ------------- | ------------- |
| Morrer()  | Método que apaga o boneco da tela e notifica o jogo para terminar  |
| Andar()  | Método que move o personagem pelo aixo X - determinado pela velocidade  |
| Pular() | Método que move o personagem pelo eixo Y |

  #### Jogo
  
| Métodos  | Definição |
| ------------- | ------------- |
| IniciarJogo()  | Define o estado do jogo como ativo  |
| FinalizarJogo()  | Define o estado do jogo como inativo - ativado quando algo mata o jogador ou quando são coletadas 10 flores|
| DesenharCenario() | Desenha o cenario quando o jogo é iniciado |

  #### Espinhos
  
| Métodos  | Definição |
| ------------- | ------------- |
| AlterarPosicao(posicao)  | Muda a posição do espinho, quando chegar a certa posição ele muda de direção  |
| DesenharEspinho(tipo)  | Desenha os espinhos na tela - O tipo do espinho determina se é um espino voador ou estaico |
| MatarJogador() | Mata o jogador caso tenha contato |

  #### Espinhos
  
| Métodos  | Definição |
| ------------- | ------------- |
| Correr()  | Muda a posição do perseguidor na tela - caso tenha um tempo de espera ele deve esperar  |
| Desenhar()  | Desenha o perseguidor na tela |
| MatarJogador() | Mata o jogador caso tenha contato |

  #### Flor
  
| Métodos  | Definição |
| ------------- | ------------- |
| ColetarFlor()  | Verifica se a  contato com o jogador e retira a flor da tela  |
| GerarPontuacao()  | Retorna uma pontuacao quando coletada |

# Relatorio de desenvolvimento
  O projeto tem base em um documento em HTML com as margenns retiradas através de CSS.
  o script principal define o documento HTML e o Canvas e define todas as variaveis utilizadas. No script principal são feitas as instancias das classes utilizadas durante o jogo. O script principal tem duas funções principais: Plataformas e EventListener.
  A função de plataforma desenha no canvas uma plataforma de tamanho predefinido nas coordenadas fornecidas em seus paramentros. Nessa função esta imbuida a função de desenhar flores.
  A função de EventListener identifica quando uma tecla do teclado é pressionada e executa ações de acordo. Nessa função esta imbuida a função de movimento do personagem.
  ## Personagem
  <img src="Imagens/personagem.png">
  A classe personagem é a classe do principal elemento do jogo. Nessa classe estão os métodos "Andar" e "Pular". O método "Andar" modifica as coordenadas no eixo X enquanto apaga e re-desenhao personagem para dar a impressão de movimento.
  ## Flor
  <img src="Imagens/flor.png">
  A classe flores é a classe da pontuação do jogo. Nessa classe está o método de desenho da flor. Nessa classe deveria existir um método de coleta e atualização de pontos, que apagaria a flor em contato com o jogador e retornaria um ponto para o jogo.
  ## Espinho
  <img src="Imagens/espinho.png">
  A classe espinho é uma das ameaças ao jogador. A classe não foi trabalhada, mas deveria ter um método para matar o jogador ao contato e teria variação em seu tipo.
