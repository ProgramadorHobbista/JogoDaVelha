function IAInteligente(){
  
  let maiorScore = -1000;
  let jogada = {};
  
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(tabuleiro[i][j] == ''){
        tabuleiro[i][j] = jogador1;
        
        let score = minimax(tabuleiro,0,false);
        
        tabuleiro[i][j] = '';
        
        if(score>maiorScore){
          maiorScore = score;
          jogada = {i,j};
        }
      }
    }
  }
  
  let indiceCasa = checarDisponibilidadeCasa([jogada.i,jogada.j]);
  
  if(indiceCasa!=-1){
    tabuleiro[jogada.i][jogada.j] = jogador1;
    
    casasDisponiveis.splice(indiceCasa, 1);
    vezJogador1 = !vezJogador1;
    let vencedor = checarVitoria();
    
    testaGameOver(vencedor);
    
  }
  
}

function minimax(tabuleiro, profundidade, isMaximizing ){
  
  let resultado = checarVitoria();
  
  
  if(resultado!=null){
    return resultado;
  }
  
  if(isMaximizing){
    let maiorScore = -1000;
    
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        
        if(tabuleiro[i][j] == ''){
          tabuleiro[i][j] = jogador1;
          let score = minimax(tabuleiro,profundidade+1, false);
          tabuleiro[i][j] = '';
          maiorScore = max(score, maiorScore );
          
        }
        
      }
    }
    
    return maiorScore;
    
  }else{
    let maiorScore = 1000;
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        
        if(tabuleiro[i][j] == ''){
          tabuleiro[i][j] = jogador2;
          let score = minimax(tabuleiro, profundidade+1, true);
          
          tabuleiro[i][j] = '';
          maiorScore = min(score, maiorScore);
        }
        
      }
    }
    return maiorScore;
  }
  
  
  
  
  
}