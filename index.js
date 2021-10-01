var data_evento = 25/09/2021;
var data_atual = 23/09/2021;
var idade = 18;
var participantes = 77;

console.log('Digite a data de hoje:');
console.read(data_atual);
console.log('Digite a data do evento:');
console.read(data_evento);
if (data_atual < data_evento) {
    console.log('Evento Permitido!');
} else {
    console.log('Data Invalida!');
}
console.log('Digite sua idade:');
console.read(idade);
if (idade >= 18) {
    console.log('Console Permitido!');
} else {
    console.log('Idade não permitida!');
}
console.log('Digite a quantidade de participantes e palestrantes:');
console.read(participantes);
if (participantes <= 100) {
    console.log('Quantidade permitida!');
} else {
    console.log('Limite Excedido!');
}