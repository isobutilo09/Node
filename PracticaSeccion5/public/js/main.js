const canvas = document.getElementById('mascota');
const ctx = canvas.getContext('2d');

// Cada letra es un píxel: . vacío, K contorno, Y amarillo, R mejilla
const sprite = [
  '..K......K..',
  '..KK....KK..',
  '..KYK..KYK..',
  '...KYYYYK...',
  '..KYYYYYYK..',
  '.KYYKYYKYYK.',
  '.KYYKYYKYYK.',
  '.KRYYYYYYRK.',
  '.KYYYKKYYYK.',
  '..KYYYYYYK..',
  '...KYYYYK...',
  '....KKKK....'
];

const colores = {
  K: '#1b1b2f',
  Y: '#ffd93b',
  R: '#ff5a5a'
};

// Dibujar el sprite píxel a píxel
for (let y = 0; y < sprite.length; y++) {
  for (let x = 0; x < sprite[y].length; x++) {
    const letra = sprite[y][x];
    if (letra !== '.') {
      ctx.fillStyle = colores[letra];
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Movimiento: la mascota persigue al ratón con suavidad
let objetivoX = window.innerWidth / 2;
let objetivoY = window.innerHeight / 2;
let x = objetivoX;
let y = objetivoY;

document.addEventListener('mousemove', (evento) => {
  objetivoX = evento.clientX;
  objetivoY = evento.clientY;
});

function mover() {
  x = x + (objetivoX - x) * 0.08;
  y = y + (objetivoY - y) * 0.08;
  canvas.style.transform = 'translate(' + (x - 48) + 'px, ' + (y - 48) + 'px)';
  requestAnimationFrame(mover);
}
mover();

// Interacción: al hacer clic, da un saltito
document.addEventListener('click', () => {
  canvas.classList.add('salto');
  setTimeout(() => {
    canvas.classList.remove('salto');
  }, 300);
});