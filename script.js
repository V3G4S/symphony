const palavra = "symphony"; // Palavra fixa para adivinhar
let letrasCorretas = Array(palavra.length).fill('_');

function atualizarPalavraNaTela() {
    document.getElementById('palavraContainer').textContent = letrasCorretas.join(' ');
}

document.getElementById('botaoPalpite').addEventListener('click', function() {
    const letra = document.getElementById('entradaPalpite').value.toLowerCase();
    document.getElementById('entradaPalpite').value = '';

    let acerto = false;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            letrasCorretas[i] = letra;
            acerto = true;
        }
    }

    if (letrasCorretas.join('') === palavra) {
        document.getElementById('mensagem').textContent = "Parabéns! Você adivinhou a palavra!";
        desativarJogo();
        iniciarAnimacaoGolfinhos();
        tocarAudioComemoracao(); // Chama a função para tocar o áudio
    } else if (!acerto) {
        document.getElementById('mensagem').textContent = "Letra incorreta!";
    } else {
        document.getElementById('mensagem').textContent = "";
    }

    atualizarPalavraNaTela();
});

function desativarJogo() {
    document.getElementById('botaoPalpite').disabled = true;
    document.getElementById('entradaPalpite').disabled = true;
}

function iniciarAnimacaoGolfinhos() {
    const animacaoGolfinhos = document.getElementById('animacaoGolfinhos');
    animacaoGolfinhos.style.display = 'block';

    const numGolfinhos = 50; // Número de golfinhos

    for (let i = 0; i < numGolfinhos; i++) { // Adicionar vários golfinhos
        const golfinho = document.createElement('div');
        golfinho.className = 'golfinho';
        golfinho.style.left = `${Math.random() * 100}%`; // Posicionamento aleatório na horizontal
        golfinho.style.animationDelay = `${Math.random() * 3}s`; // Atraso aleatório na animação

        const img = document.createElement('img');
        img.src = 'https://www.fisheries.noaa.gov/s3//styles/original/s3/dam-migration/640x427-dolphin_bottlenose_nb_w.png?itok=e6t8QRC9'; // Imagem do golfinho com arco-íris
        golfinho.appendChild(img);

        animacaoGolfinhos.appendChild(golfinho);
    }
}

function tocarAudioComemoracao() {
    const audio = document.getElementById('audioComemoracao');
    audio.play(); // Toca o áudio de comemoração
}

window.onload = atualizarPalavraNaTela;
