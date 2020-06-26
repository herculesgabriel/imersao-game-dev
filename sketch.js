function setup() {
  
  createCanvas(windowWidth, windowHeight)
  frameRate(40); 
  somDoJogo.loop()
  
  telaInicial         = new TelaInicial()
  jogo                = new Jogo()
  botaoGerenciador    = new BotaoGerenciador('Iniciar', (width / 2), (height / 2))

  jogo.setup()
  
  cenaAtual = 'telaInicial'
  cenas = {
    jogo,
    telaInicial
  }
  
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  cenas[cenaAtual].draw()
}