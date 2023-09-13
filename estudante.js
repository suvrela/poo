class estudante{
    constructor(matricula, nome){
        this.matricula = matricula;
        this.nome = nome;
    }
}
var nome= prompt('Nome');
var matricula= prompt('Matrícula');
const estudante1 = new estudante (matricula,nome);
alert(estudante1.nome + "\n" + estudante1.matricula); 
//document.write(nome1.nome + "</br>" + nome1.matricula); 