// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==1){
        fill("gray")
        rect(size*i,size*j,25,25)
      }
      else{
noFill("white")
rect(size*i,size*j,25,25)
      }

     if((i+j)%2==1&&j<3){
        fill("red")
        ellipse(size*i+12.5,size*j+12.5,20,20)
      }
      if((i+j)%2==1&&4<j){
        fill("black")
        ellipse(size*i+12.5,size*j+12.5,20,20)
      }
      else{
noFill()
ellipse(size*i,size*j,20,20)
      }

    }
  }
}
