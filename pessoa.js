var pessoa = {
    nome: ["Natan", "Alves"],
    idade: 18,
    sexo: "masculino",
    interesses: ["música", "video game"],
    bio: function () {
      alert(
        this.nome[0] +
          " " +
          this.nome[1] +
          " tem " +
          this.idade +
          " anos de idade. Ele gosta de " +
          this.interesses[0] +
          " e " +
          this.interesses[1] +
          ".",
      );
    },
    saudacao: function () {
      alert("Oi! Eu sou " + this.nome[0] + ".");
    },
  };