let listaDeNumeroAleatorio = [];
let numeroLimete = 10;
let numeroAleatorio = geraNumeroAleatorio();
let tentativa = 1;
let nomeSingular = tentativa > 1 ? 'tentativas' : 'tentativa';
let recebeChute;

function exibeTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibeMensagemInicial() {
    exibeTexto('h1', 'Jogo do numero secreto');
    exibeTexto('p', 'Escolha um numero de 0 a 10');
}   

exibeMensagemInicial();

function verificarChute() {
    recebeChute = document.querySelector('input').value;

    if (recebeChute == numeroAleatorio) {
        exibeTexto('h1', 'Acertoooooou!');
        exibeTexto('p', `Parabéns voce acertou, o numero secreto é ${numeroAleatorio} com o total de ${tentativa} ${nomeSingular}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (recebeChute > numeroAleatorio) {
        exibeTexto('h1', 'Você errou tente denovo');
        exibeTexto('p', 'O numero secreto é menor');
        limpaCampo()
    } else {
        exibeTexto('h1', 'Você errou tente denovo');
        exibeTexto('p', 'O numero secreto é maior');
        limpaCampo()
    }
    tentativa++;
}

function geraNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroLimete + 1);
    let quantiadeDeNumerosNaLista = listaDeNumeroAleatorio.length;

    if (quantiadeDeNumerosNaLista == numeroLimete) {
        listaDeNumeroAleatorio = [];
    }

    if (listaDeNumeroAleatorio.includes(numeroGerado)) {
        return geraNumeroAleatorio();
    } else {
        listaDeNumeroAleatorio.push(numeroGerado);
        return numeroGerado;
    }
}

function novoJogo() {
    limpaCampo();
    numeroAleatorio = geraNumeroAleatorio();
    tentativa = 1;
    exibeMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled');
}

function limpaCampo() {
    let reinicia = document.querySelector('input');
    reinicia.value = '';
}