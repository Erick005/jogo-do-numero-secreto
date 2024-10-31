alert('Olá mundo, estou aqui novamente!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let recebeChute = 0;
let tentativas = 1;
var nomeSingular = tentativas > 1 ? 'tentativas' : 'tentativa';

while (recebeChute != numeroSecreto) {
    recebeChute = prompt('Acerte o numero de 0 a 100');

    if (recebeChute == numeroSecreto) {
        alert(`Parabéns voce acertou, o numero secreto é ${numeroSecreto} com o total de ${tentativas} ${nomeSingular}`);
    } else if (recebeChute > numeroSecreto) {
        alert(`O numero secreto é menor que ${recebeChute}`);
    } else if (recebeChute < numeroSecreto) {
        alert(`O numero secreto é maior que ${recebeChute}`);
    } else {
        alert(`você errou, o numero secreto é ${numeroSecreto}`);
    }

    tentativas++;
}