const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

/*
let contador = 0;
while( contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}
*/

for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[i].onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
