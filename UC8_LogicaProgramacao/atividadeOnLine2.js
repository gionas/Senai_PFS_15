// Exemplo de controle par ou impar para classificação de alunos

let alunos = 20;

for (let contador = 0; contador < alunos; contador++) {
   
    console.log(contador);

    if (contador == 0) {
        
        console.log('O número é o zero')
    }
    if (contador % 2 == 0 && contador != 0) {
        
        console.log('O número é par')

    }
    if (contador % 2 != 0) {

        console.log('O número é ímpar')

    }
}