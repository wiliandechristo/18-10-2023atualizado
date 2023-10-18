function tocasom (idElementoAudio) {
document.querySelector(idElementoAudio).play();
}

document.querySelectorAll('.tecla');

const listaDeTeclas = querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

const tecla = listaDeTeclas[contador];
const instrumento = Tecla.classList[1];
const idAudio = `#som_${instrumento}`;

console.log(idAudio);

Tecla.onclick = function () {
tocasom(idAudio);
};

contador = contador + 1;

console.log(contador);
}
