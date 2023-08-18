var jogador = {
    nome: nome,
    numero: numero,
    gols: gols,
};
var nome,numero,gols;

    jogador.nome=prompt("Qual è seu nome?");
    jogador.numero=prompt("Nùmero da sua camisa");
    jogador.gols=prompt("Quantos gols?")
    
 document.writeln(`${jogador.nome}<br>${jogador.numero}<br>${jogador.gols}`); 

