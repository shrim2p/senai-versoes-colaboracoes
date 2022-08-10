//Sistema de Contagem e Classificação
//Considerar a quantidade de alunos presentes na sala, percorrendo do zero até o número total de alunos e retornar os seguintes resultados:
//1.Se o número for par, escreva 'par' e o número correspondente;
//2.Se o número for ímpar, escreva 'ímpar' e o número correspondente;
//3.Se o número for zero, escreva 'zero' e o número correspondente.
let n_alunos,escolha;
let cont=0;
console.log(`Bem vindo ao sistema de contagem e posição!`);
while('escolha'){
	console.log('Deseja verificar uma contagem ou verificar uma posicão?\n(1) Verificar uma contagem;\n(2) Verificar uma posição.');
	escolha=prompt(`Escolha 1 ou 2: `).trim();
	if(escolha==1){
		n_alunos=prompt(`Digite um valor para verificar a contagem e posição:`);
		console.log(`Esta contagem vai até ${n_alunos}`);
		for (cont=0; cont<=n_alunos; cont++){
			if(cont==0){
				console.log(`${cont} é número é zero!\n`);
			}
			else if(cont!=0&&cont%2==0){
				console.log(`${cont} é um número par!\n`);
			}
			else{
				console.log(`${cont} é um número ímpar!\n`)
			}
		}
		console.log('FIM DA CONTAGEM!\n');
	}
	else if(escolha==2){
		n_alunos=prompt(`Digite um número para verificação: `).trim();
		if(n_alunos==0){
			console.log(`${n_alunos} este número não é divisível\n`);
		}
		else if(n_alunos!=0&&n_alunos%2==0){
			console.log(`\n${n_alunos} este número é par!\n`);
		}
		else{
			console.log(`\n${n_alunos} este número é ímpar!\n`);
		}
	}
	else{
		console.log(`\nEsta opção ñ existe!\n`);
	}
}

