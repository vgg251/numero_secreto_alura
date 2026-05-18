alert('Bem vindo!');
let NumeroSecreto= parseInt(Math.random()*(mutiplicador=100)+1);
console.log(NumeroSecreto);
let chute;
let tentativa=1;

while (chute!=NumeroSecreto) {
chute=prompt(`Escolha um número entre 1 e ${mutiplicador}`);
if (chute===NumeroSecreto) {} else {
if (chute>NumeroSecreto) {
alert(`O número é menor que ${chute}`);} 
else {
alert(`O número é maior que ${chute}`);
}
tentativa++;
}
}

let PalavraTentativa= tentativa>1? 'tentativas' : 'tentativa';
alert(`Parabéns! você acertou com ${tentativa} ${PalavraTentativa}, o número é ${NumeroSecreto}`);
alert('oi')
