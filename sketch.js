var song
var fft
var x
var y
var amp
var bass
var particles = []

function preload(){
  song = loadSound('song.mp3')
}

function setup() {
createCanvas(windowWidth, windowHeight);
const ctx = canvas.getContext("2d");
ctx.shadowOffsetX = 5;
ctx.shadowColor = "black"
ctx.shadowBlur = 1000;
angleMode(DEGREES)
fft = new p5.FFT()
}

function draw() {
  fft.smooth(0.4)
  strokeWeight(50)
  // noStroke()
  stroke(amp, 0, 255);
  scale(0.1);

  u = 15000;
  da = 2000

  t = 0;
  ad = 10000



  translate(width/0.2, height/0.2)

  var analyzer = fft.analyze();
  amp = fft.getEnergy(20, 30);
  bass = fft.getEnergy(10, 15);
  part = fft.getEnergy(20, 200)
  background(25);
  fill(0);




  


  beginShape()

  // for(var i = 0; i <= 360; i++){
  //   var index = floor(map(i, 0, 30, 5, 6))
  //   var r = map(analyzer[index], 0, 255, u, t)

  //   var x = r * sin(i)
  //   var y = r* cos(i)
  //   vertex(x , y)
  // }

  for(var i = 0; i <= 30; i++){
    var index = floor(map(i, 0, 30, 5, 10))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 30; i <= 60; i++){
    var index = floor(map(i, 30, 60, 10, 15))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 60; i <= 90; i++){
    var index = floor(map(i, 60, 90, 15, 20))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 90; i <= 120; i++){
    var index = floor(map(i, 90, 120, 20, 25))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 120; i <= 150; i++){
    var index = floor(map(i, 120, 150, 25, 30))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 150; i <= 180; i++){
    var index = floor(map(i, 150, 180, 30, 35))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 180; i <= 210; i++){
    var index = floor(map(i, 180, 210, 35, 30))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 210; i <= 240; i++){
    var index = floor(map(i, 210, 240, 30, 25))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 240; i <= 270; i++){
    var index = floor(map(i, 240, 270, 25, 20))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 270; i <= 300; i++){
    var index = floor(map(i, 270, 300, 20, 15))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 300; i <= 330; i++){
    var index = floor(map(i, 300, 330, 15, 10))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 330; i <= 360; i++){
    var index = floor(map(i, 330, 360, 10, 5))
    var r = map(analyzer[index], 0, 255, u, da)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
    }


  endShape()




  beginShape()

  for(var i = 0; i <= 30; i++){
    var index = floor(map(i, 0, 30, 5, 6))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 30; i <= 60; i++){
    var index = floor(map(i, 30, 60, 6, 7))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 60; i <= 90; i++){
    var index = floor(map(i, 60, 90, 7, 8))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 90; i <= 120; i++){
    var index = floor(map(i, 90, 120, 8, 9))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 120; i <= 150; i++){
    var index = floor(map(i, 120, 150, 9, 10))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 150; i <= 180; i++){
    var index = floor(map(i, 150, 180, 10, 11))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 180; i <= 210; i++){
    var index = floor(map(i, 180, 210, 11, 10))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 210; i <= 240; i++){
    var index = floor(map(i, 210, 240, 10, 9))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 240; i <= 270; i++){
    var index = floor(map(i, 240, 270, 9, 8))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 270; i <= 300; i++){
    var index = floor(map(i, 270, 300, 8, 7))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 300; i <= 330; i++){
    var index = floor(map(i, 300, 330, 7, 6))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  for(var i = 330; i <= 360; i++){
    var index = floor(map(i, 330, 360, 6, 5))
    var r = map(analyzer[index], 0, 255, ad, t)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
    }


  endShape()

  // var u = new Particle()
  // particles.push(u)
  
  // for(var i = particles.length -1; i>= 0; i--){

  //   if(!particles[i].edges()){

  //     particles[i].update(part>230)
  //     particles[i].show()
  //   } else{
  //     particles.splice(i, 1)
  //   }
  // }
  stroke(255);
    noStroke()
  s = -3000;
  b = 3000;
  fill(amp, 0, 255)
  beginShape()
  for(var i = 0; i <= 90; i++){
    var index = floor(map(i, 0, 90, 30, 40))
    var r = map(analyzer[index], 0, 255, s, b)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }




  for(var i = 90; i <= 180; i++){
    var index = floor(map(i, 90, 180, 40, 50))
    var r = map(analyzer[index], 0, 255, s, b)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }


  for(var i = 180; i <= 270; i++){
    var index = floor(map(i, 180, 270, 50, 40))
    var r = map(analyzer[index], 0, 255, s, b)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }



  for(var i = 270; i <= 360; i++){
    var index = floor(map(i, 270, 360, 40, 30))
    var r = map(analyzer[index], 0, 255, s, b)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  endShape()

const p = 150;
const d = 150;
fill(0)
stroke(amp, 0, 255);
strokeWeight(50)

  beginShape()
  for(var i = 0; i <= 90; i++){
    var index = floor(map(i, 0, 90, 0, 10))
    var r = map(analyzer[index], 0, 255, p, d)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }




  for(var i = 90; i <= 180; i++){
    var index = floor(map(i, 90, 180, 10, 20))
    var r = map(analyzer[index], 0, 255, p, d)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }


  for(var i = 180; i <= 270; i++){
    var index = floor(map(i, 180, 270, 20, 10))
    var r = map(analyzer[index], 0, 255, p, d)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }



  for(var i = 270; i <= 360; i++){
    var index = floor(map(i, 270, 360, 10, 0))
    var r = map(analyzer[index], 0, 255, p, d)

    var x = r * sin(i)
    var y = r* cos(i)
    vertex(x , y)
  }
  endShape()

const w = -2000;
const q = 300;
// fill(amp)
// // stroke(255);
// noStroke()
// strokeWeight(15)
}


function mouseClicked(){
  if(song.isPlaying()){
    song.pause()
  }
  else{
    song.play()
  }
}

// class Particle {
//   constructor() {
//     this.pos = p5.Vector.random2D().mult(100)
//     this.vel = createVector(0, 0)
//     this.acc = this.pos.copy().mult(random(0.01, 0.001))

//     this.w = random(3, 5)
//   }
//   update(cond){
//     this.vel.add(this.acc)
//     this.pos.add(this.vel)
//     if (cond){
//       this.pos.add(this.vel)
//       this.pos.add(this.vel)
//       this.pos.add(this.vel)
//       this.pos.add(this.vel)
//       this.pos.add(this.vel)
//       this.pos.add(this.vel)
//     }
//   }
//   edges(){
//     if (this.pos.x < -width * 2 || this.pos.x > width *2|| this.pos.y < -height *2|| this.pos.y > height *2){
//       return true
//     }
//     else{
//       return false
//     }
//   }
//   show(){
//     noStroke()
//     fill(0)
//     ellipse(this.pos.x, this.pos.y, 100)
//   }
// }
