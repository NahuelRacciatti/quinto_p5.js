let lapse;
let velocidad = 1;
let ace;
let temp;
let tinte = 255;
let dura;
let colores = [];
let estrella;

function preload() {
  ace = loadSound("sonidos_y_videos/tiempo_acelerado.mp3");
  temp = loadSound("sonidos_y_videos/tiempo_detenido.mp3");
  lapse = createVideo("sonidos_y_videos/timelapse.mp4");
  estrella = createVideo("sonidos_y_videos/estrellas.mp4");
  lapse.hide();
  estrella.hide();
  lapse.loop();
  estrella.loop();
}

function setup() {
  createCanvas(600, 400);
  dura = ace.duration() / 2;
  print(dura);
}

function draw() {
  background(220);

  // Verifica si se debe reproducir el video estrella
  if (velocidad >= 9) {
    estrellado();
  }

  // Dibuja el video lapse y aplica el tintado
  tint(255, tinte);
  image(lapse, 0, 0, width, height);
  print(ace.currentTime());

  if (ace.currentTime() > dura) {
    tinte = max(0, tinte - 0.4);
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    velocidad += 3;
    lapse.speed(velocidad);
  } else if (keyCode == LEFT_ARROW) {
    velocidad = max(0.1, velocidad - 0.1);
    lapse.speed(velocidad);
  }
  if (velocidad >= 9) {
    ace.play();
  } else if (velocidad <= 0.5) {
    temp.play();
    lapse.pause();
  }
}