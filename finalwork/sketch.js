// ダーツ

function setup() {
  createCanvas(500, 500);
}

let number = 0;
let str = "";

function draw(){
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  background(255);
  stroke(255);
  strokeWeight(3);

  const maxR = min(width*0.7, height*0.7); // 大きさは幅と高さのうち小さい方
  //テキストを入力できる余地を作るために0.7でかけた．

  //外から順に色を塗っていく
  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  drawArcs(cream, black, maxR * 0.75);
  drawArcs(green, red, maxR * 0.5);
  drawArcs(cream, black, maxR * 0.45);

  drawCircle(green, maxR * 0.1);
  drawCircle(red, maxR * 0.05);

  //ダーツの名称説明
  textSize(16);
  fill(0);
  text("クリックするとその部分の説明を見られます。",10,30);
  text(str,10,450);
}

function drawCircle(c, r){
  fill(c);
  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

function mousePressed(){
  const cx = width / 2;
  const cy = height / 2;
  const maxR = min(width*0.7, height*0.7);
  //ダーツの中心からカーソルの位置まで距離
  let distance = sqrt((mouseX - cx)*(mouseX - cx) + (mouseY - cy)*(mouseY - cy));

  erase();
  rect(0,0,width,height);
  noErase();

  if(distance <=maxR * 0.05/2){
    str = "インナーブル。中心にある2重円の内側の円の名称。";
  }
  else if(distance <= maxR * 0.1/2){
    str = "アウターブル。中心にある2重円の外側の円の名称。";
  }
  else if(distance <= maxR * 0.45/2){
    str = "シングル。各数字の台形・扇形の部分。\nその数字がスコアとなる。";
  }
  else if(distance <= maxR * 0.5/2){
    str = "トリプルリング。中心部分と外側の中間にあるリング状の細い部分。\n各数字の3倍がスコアとなる。";
  }
  else if(distance <= maxR * 0.75/2){
    str = "シングル。各数字の台形・扇形の部分。その数字がスコアとなる。";
  }
  else if(distance <= maxR * 0.8/2){
    str = "ダブルリング。一番外側のリング状の細い部分。\n各数字の2倍がスコアとなる。";
  }
}