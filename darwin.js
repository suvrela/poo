// Definindo a classe pai (superclasse)
class Animal {
    constructor(nome) {
      this.nome = nome;
      
    }
  
    fazerBarulho() {
      alert(`${this.nome} faz um barulho.`);
    }
  }
  
  // Definindo a classe filha (subclasse) que herda de Animal
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome); // Chama o construtor da classe pai
      this.raca = raca;
    }
  
    latir() {
      alert(`${this.nome} (${this.raca}) late: Woof! Woof!`);
    }
  }
  
  // Criando uma instância da classe Cachorro
  let nome = prompt('Nome do cachorro')
  let raca = prompt('Raça do cachorro')
  const meuCachorro = new Cachorro(nome,raca);
  alert(meuCachorro.nome + "\n" + meuCachorro.raca); 
  

   
  
  
  // Chamando métodos da classe pai e da classe filha
  meuCachorro.fazerBarulho(); // Saída: Max faz um barulho.
  meuCachorro.latir(); // Saída: Max (Labrador) late: Woof! Woof!
  