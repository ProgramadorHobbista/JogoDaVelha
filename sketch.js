let tabuleiro= [
  ['-1','-1','-1'],
  ['1','1','-1'],
  ['-1','-1','-1']
];

let jogador1= -1;
let jogador2 = 1;

let vezJogador1 = true;
    

function desenhaJogadas(){
  
  let w = width/3;
  let h = height/3;
  
  
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      
      let alvo = tabuleiro[j][i];
      
      let x= i*w+w/2;
      let y= j*h+h/2;
      let xraio = w/4;
      
      strokeWeight(4);
      
      if(alvo==jogador1){
        stroke(color('blue'));
        line(x-xraio,y-xraio, x+xraio,y+xraio);
        line(x+xraio,y-xraio, x-xraio,y+xraio);
        
      }else if(alvo==jogador2){
        stroke(color('green'));
        circle(x,y, xraio);
      }
      
    }
  }
  
  
}
    
function desenharTabuleiro(){
  let w = width/3;
  let h = height/3;
  
  strokeWeight(5);  
  stroke(0);
  
  line(w,0,w,height);
  line(2*w,0,2*w,height);
  line(0,h,width,h);
  line(0,2*h,width,2*h);
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  desenharTabuleiro();
  desenhaJogadas();
}
