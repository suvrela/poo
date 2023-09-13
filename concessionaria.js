class veiculo{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano= ano; 
    }
}
var marca= prompt('Qual a marca? ');
var modelo= prompt('Qual o modelo? ');
var ano= prompt('Qual o ano? '); 
const veiculo1 = new veiculo(marca,modelo,ano);
alert(veiculo1.marca+"\n" + veiculo1.modelo + "\n" + veiculo1.ano); 
