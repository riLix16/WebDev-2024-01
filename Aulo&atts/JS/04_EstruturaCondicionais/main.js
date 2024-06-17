const a=10;
if(a==10){
    console.log('a é 10')
}

const b='10';
if(b==10){
    console.log('b é 10')
}

console.clear();
const c=10;
if(c===10){
    console.log('c é 10')
}


const d='10';
if(d===10){
    console.log('b é 10');
}
console.log('Estou fora do if que compara string');

console.clear();

const e='10';
if(e===10) console.log('e é o numero 10');

else {
    console.log('Resultado da condição: ${e===10}');
    console.log('e não é um numeral');
}
console.clear();
const f=4;
const g=11;

if(f>5||g>10){
    console.log('Condição é ${f>5||g>10}')
console.log('f é maior que 5 ou g é maior que 10');
}

else
console.log('f n é maior que 5 ou g é maior que 10');

if(f>5&&g>10)console.log('f é maior que 5 e g é maior que 10')
;

else{
    console.log('Condição é ${f>5&&g>10}')
    console.log('f n é maior que 5 ou g n é maior q 10');
}











