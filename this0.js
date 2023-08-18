var pessoa1 = {
    nome: "Chris",
    saudacao: function () {
      alert("Oi! Meu nome é " + this.nome + ".");
    },
  };
  
  var pessoa2 = {
    nome: "Brian",
    saudacao: function () {
      alert("Oi! Meu nome é " + this.nome + ".");
    },
  };
  
  alert(pessoa1.nome);
  alert(pessoa1.saudacao());