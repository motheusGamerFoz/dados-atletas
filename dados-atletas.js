class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;

        // Novamente, ordenando as notas em formato descendente (maior pro menor).
        this.notas = notas.sort(function(primeiro, segundo) {
            return segundo - primeiro
        });
    };

    // Não vejo a menor necessidade desses métodos aqui, mas tranquilo, são requisitos pra atividade.
    // Podem só serem substituídos por this.nome, this.idade, ...
    obtemNomeAtleta() {
        return this.nome;
    };

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    };

    obtemNotasAtleta() {
        return this.notas;
    }

    calculaCategoria() {
        let idade = this.obtemIdadeAtleta()
        let categoria = "Sem categoria";

        if (idade >= 9 && idade <= 11) {
            categoria = "Infantil";
        } else if (idade <= 13) {
            categoria = "Juvenil";
        } else if (idade <= 15) {
            categoria = "Intermediário";
        } else if (idade <= 30) {
            categoria = "Adulto";
        };

        return categoria;
    };

    calculaIMC() {
        let peso = this.obtemPesoAtleta()

        // Math.pow(this.altura, 2) é o mesmo que altura x altura.
        return peso / Math.pow(this.altura, 2);
    };

    calculaMediaValida() {
        let notas = this.obtemNotasAtleta()
        let media = 0;

        for (let i = 1; i < (notas.length - 1); i ++) {
            media += notas[i];
        };

        return media / (notas.length - 2);
    };
};

let atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]);
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.altura);
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.calculaCategoria());
console.log("IMC: " + atleta.calculaIMC());
console.log("Média válida: " + atleta.calculaMediaValida());