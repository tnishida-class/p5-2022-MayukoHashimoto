// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  fill("green")
  triangle(200,140,240,170,210,120)
  fill("green");
  ellipse(120,100,w + p * 2, h + p * 2);
  fill(255);
  text(t, p, h + p);
  pop();
}
