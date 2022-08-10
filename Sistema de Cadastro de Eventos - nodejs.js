process.env.TZ='America/Sao_Paulo'
var nome_part,sobrenome_part, nome_palest, sobrenome_palest, atual_data, lim_data, idade, cont_vaga=1, inscricao, tipo, confirmar, busca1,buscar2;
var lista_part=[], lista_palest=[], lista_idade, lista_pos_vaga=[];
const lim_idade=18, lim_vaga=100;										//AQUI CONFIGURA LIMITE IDADE E VAGAS
atual_data=new Date().toLocaleString();
//console.log(atual_data,Date.parse(atual_data));
lim_data=new Date('December 25 , 2022 23:59:59').toLocaleString();		//AQUI CONFIGURA A DATA LIMITE
//console.log(lim_data,Date.parse(lim_data));

console.log('BEM VINDO AO EVENTO X\n');
console.log('INSCRIÇÕES DIA 25/12/2022!\nVAGAS LIMITADAS!');

while (atual_data){
	console.log(`Vagas restantes para participantes: ${lim_vaga-cont_vaga+1}`);
	inscricao=prompt('Deseja fazer inscrição? Sim(S)/Não(N): ').toUpperCase().trim();
	if(inscricao=='S'||inscricao=='SS'||inscricao=='SIM'){
		if(Date.parse(atual_data)<Date.parse(lim_data)){
			console.log('(1) - Palestrante\n(2) - Participante');
			tipo=prompt('Você é:').toUpperCase().trim();
			if(tipo==1||tipo=='PALESTRANTE'/*palestrante*/){
				console.log('Olá Palestrante.');
				nome_palest=prompt('Insira seu primeiro nome: ').toUpperCase().trim();
				sobrenome_palest=prompt('Insira seu ultimo nome: ').toUpperCase().trim();
				confirmar=prompt('Confirmar, cadastro? (S)Sim/(N)Não: ').toUpperCase().trim();
				if (confirmar=='S'||confirmar=='SS'||confirmar=='SIM'){
					lista_palest.push({NOME:nome_palest,SOBRENOME:sobrenome_palest});
					console.log('------------------------------\nCADASTRO REALIZADO COM SUCESSO\n------------------------------');
					console.log('PALESTRANTE: ',nome_palest+' '+sobrenome_palest,'\n------------------------------');
				}
				if (confirmar=='N'||confirmar=='NN'||confirmar=='NAO'||confirmar=='NÃO'){
					console.log('CADASTRO NÃO REALIZADO!\n');
				}
			}
			if(tipo==2||tipo=='PARTICIPANTE'/*participante*/){
				if(cont_vaga<lim_vaga+1){
					console.log('Olá Participante.');
					idade=prompt('Informe a idade: ');
					if(idade>=lim_idade){
						nome_part=prompt('Informe seu primeiro nome: ').toUpperCase().trim();
						sobrenome_part=prompt('Informe seu ultimo nome: ').toUpperCase().trim();
						confirmar=prompt('Confirmar, cadastro? (S)Sim/(N)Não: ').toUpperCase().trim();
						if (confirmar=='S'||confirmar=='SS'||confirmar=='SIM'){
							lista_part.push({VAGA:cont_vaga,IDADE:idade,NOME:nome_part,SOBRENOME:sobrenome_part});
							console.log('------------------------------\nCADASTRO REALIZADO COM SUCESSO\n------------------------------');
							console.log('POSIÇÃO:',cont_vaga);
							console.log('PARTICIPANTE:',nome_part+' '+sobrenome_part,'\n------------------------------\n');
							cont_vaga+=1;
						}
						if (confirmar=='N'||confirmar=='NN'||confirmar=='NAO'||confirmar=='NÃO'){
							console.log('CADASTRO NÃO REALIZADO!\n');
						}						
					}
					else{
						console.log('-----\nERRO!\n-----\nIDADE NÃO PERMITIDA.\nCADASTRO NÃO REALIZADO!\n');
					}
				}
				else{
					console.log('VAGAS ESGOTADAS!\n');
				}
			}
		}
		else{
			console.log('DATA DE INSCRIÇÃO EXPIRADA!\n');
		}
	}
	if(inscricao=='N'||inscricao=='NN'||inscricao=='NAO'||inscricao=='NÃO'){
		break
	}
	if(inscricao=='INFO'||inscricao=='INF'||inscricao=='INFORMACAO'||inscricao=='INFORMAÇÃO'){
		console.log(`------------------------------\n------------------------------\n------------------------------\n`);
		console.log(`Hoje é: ${atual_data}\nA data limite é: ${lim_data}`);
		console.log(`O número de palestrantes inscritos é: ${lista_palest.length}`);
		console.log(`PALESTRANTES:\n`,lista_palest);
		console.log(`O número de participantes inscritos é: ${lista_part.length}`);
		console.log(`PARTICIPANTES:\n`,lista_part);
		console.log(`------------------------------\n------------------------------\n------------------------------\n`);
	}
	if(inscricao=='BUSCAR'||inscricao=='FIND'||inscricao=='B'||inscricao=='F'){
		buscar1=prompt('Digite o nome: ').toUpperCase().trim();
		buscar2=prompt('Digite o sobrenome: ').toUpperCase().trim();
		function myf(encontra){
			return (encontra.NOME+encontra.SOBRENOME)==(buscar1+buscar2);
		}
		console.log('PALESTRANTE:',lista_palest.find(myf));
		console.log('PARTICIPANTE:',lista_part.find(myf));
	}
}