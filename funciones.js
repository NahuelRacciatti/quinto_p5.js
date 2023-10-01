function estrellado() {
    colores = [];
    for (let i = 0; i < 10; i++) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      let a = 200;
      colores.push(color(r, g, b, a));
    }
    
    // Dibuja el video lapse con tintado
    tint(255, tinte);
    image(lapse, 0, 0, width, height);
  
    // Dibuja el video estrella sin tintado y en colores aleatorios
    tint(255);
    for (let i = 0; i < colores.length; i++) {
      tint(colores[i]);
    }
    image(estrella, 0, 0, width, height);
  }