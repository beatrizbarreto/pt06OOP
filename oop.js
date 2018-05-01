function Pessoa(nomeCompleto, corFavorita) {
    this.nome = nomeCompleto,
    this.corFav = corFavorita,
    this.saudacao = function() {
        console.log("Olá o meu nome é " + this.nome + " e a minha cor favorita é " + this.corFav + ".");
    }
}

var phoebe = new Pessoa("Regina Phalange", "vermelho");
phoebe.saudacao();

var chandler = new Pessoa("Miss Chanandler Bong", "verde");
chandler.saudacao();
