var peso_peca, numero_cx=1, numero_peca=1, cont_peca=0, nome, cadastro, confirmar, procurar;
var lista_peca=[];
const min_peso=100, lim_letra=3,lim_cx=1,lim_peca_cx=10;		//AQUI CONFIGURA QUANTIDADE DE CAIXA E LIMITE POR CAIXA

console.log('BEM VINDO AO SISTEMA DE CADASTRO DE PEÇAS');
while('cadastro'){
	cadastro=prompt('Deseja fazer cadastro de uma peça?(S)Sim/(N)Não: ').toUpperCase().trim();
	if(cadastro=='S'||cadastro=='SS'||cadastro=='Y'||cadastro=='YY'||cadastro=='SIM'||cadastro=='YES'){
		if(numero_peca<lim_peca_cx+1&&numero_cx<=lim_cx){
			peso_peca=prompt('Informe o peso do item em gramas: ');
			if (peso_peca>min_peso){
				nome=prompt('Informe o nome da peça: ').toUpperCase().trim();
				if (nome.length>=lim_letra){
					console.log(`CX:${numero_cx}/ITEM:${numero_peca}/PESO:${peso_peca}/NOME:${nome}`);
					confirmar=prompt('Confirmar cadastro de item?(S)Sim/(N)Não: ').toUpperCase().trim();
					if (confirmar=='S'||confirmar=='SS'||confirmar=='Y'||confirmar=='YY'||confirmar=='SIM'||confirmar=='YES'){
						cont_peca+=1;
						lista_peca.push({GERAL:cont_peca,CX:numero_cx,ITEM:numero_peca,NOME:nome,PESO:peso_peca});
						console.log('----------------------------\nCADASTRO REALIZADO COM SUCESSO!\n----------------------------\n');
						if(numero_peca==lim_peca_cx){
							numero_cx+=1;
							numero_peca=1;
						}
						else{
						numero_peca+=1;
						}
					}
					else{
						console.log('--------------------\nCADASTRO CANCELADO!\n--------------------');
					}
				}
				else{
					console.log('--------------------\nCADASTRO NÃO REALIZADO\n--------------------');
					console.log('O nome deve ter no mínimio 3 letras.\n');
				}
			}
			else{
				console.log('--------------------\nCADASTRO NÃO REALIZADO\n--------------------');
				console.log('O peso deve ser acima de 100g.\n');
			}
		}
		else{
			console.log('--------------------\nCADASTRO NÃO REALIZADO\n--------------------');
			console.log('Almoxarifado cheio, não há espaço para cadastro.\n');
		}
	}
	if(cadastro=='N'||cadastro=='NN'||cadastro=='NAO'||cadastro=='NÃO'){
		console.log('--------------------\nCADASTRO NÃO REALIZADO\n--------------------\n');
	}
	if(cadastro=='I'||cadastro=='INFO'||cadastro=='R'||cadastro=='RELATORIO'){
		console.log(`--------------------\nINFORMAÇÃO\n--------------------`);
		console.log(`TOTAL DE ITENS CADASTRADOS:${cont_peca}`);
		console.log(`CAIXAS TOTAIS:${lim_cx}\nCAIXAS OCUPADAS:${numero_cx-1}`);
		console.log(lista_peca);
		console.log(`--------------------\nINFORMAÇÃO\n--------------------\n`);
	}
	if(cadastro=='FIND'||cadastro=='PROC'||cadastro=='PROCURAR'||cadastro=='F'||cadastro=='BUSCAR'){
		procurar=prompt('Digite o nome a pesquisar: ').toUpperCase().trim();
		function myfunction(busca){
			return busca.NOME==procurar;
		}
		console.log(lista_peca.find(myfunction));
	}
}