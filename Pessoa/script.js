class Pessoa {
    constructor() {
        this.nome = undefined;
        this.idade = undefined;
        this.sexo = undefined;
    }

    detalhes() {
        console.log(`A pessoa cadastrada tem os seguinte detalhes. Nome: ${this.nome}, idade: ${this.idade}, sexo: ${this.sexo}`)
    }
}

let pessoa1 = new Pessoa();

pessoa1.nome = prompt("Informe seu nome")
pessoa1.idade = prompt("Informe seu idade")
pessoa1.sexo = prompt("Informe seu sexo");

alert(pessoa1.detalhes());