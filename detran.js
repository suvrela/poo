class Veiculo{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
    class Carro extends Veiculo{
        constructor(marca,modelo,ano,potencia){
        super(marca,modelo,ano);
             this.potencia = potencia;  
        }
        
    }
        class Moto extends Veiculo{
        constructor(marca,modelo,ano,potencia){
        super(marca,modelo,ano)
            this.potencia = potencia;  
         }

     }
   /* let marca = prompt('Marca')
    let modelo = prompt('Modelo')
    let ano = prompt('ano')
    const Veiculo1 = new Veiculo(marca,modelo,ano)
    alert(Veiculo1.marca + "\n" + Veiculo1.modelo + "\n" + Veiculo1.ano); */

    let opcao = prompt("Garagem Avilar \n 1. Moto \n 2. carro")
    switch(opcao) {
        case '1': 
        var marca = prompt("Marca");
        var modelo = prompt("Modelo");
        var ano = prompt("Ano");
        var potencia = prompt("Potência");
        const carro1 = new Carro(marca,modelo,ano,potencia);
        alert (`${carro1.marca}\n ${carro1.modelo}\n ${carro1.ano}\n ${carro1.potencia}`); break; 
        case '2': 
        var marca = prompt("Marca");
        var modelo = prompt("Modelo");
        var ano = prompt("Ano");
        var potencia = prompt("Potência");
        const moto1 = new Moto(marca,modelo,ano,potencia);
        alert (`${moto1.marca}\n ${moto1.modelo}\n ${moto1.ano}\n ${moto1.potencia}`); break; 
        default: 
        alert("Opção inválida"); 
    }