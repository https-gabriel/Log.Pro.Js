class Carro {
    constructor() {
        this.marca = undefined;
        this.modelo = "hb20";
        this.cor = "branco";
        this.qtdePortas = 2;
    }

    mostrarCarro() {
        console.log(`O modelo do carro apresentado é: ${this.marca}, ${this.modelo}, ${this.cor}, ${this.qtdePortas} portas`);
    }
}

let carro = new Carro();
let carro2 = new Carro()

carro.marca = "hyundai"

carro2.cor = "black";
carro2.qtdePortas = 4
carro2.marca = "honda"
carro2.modelo = "civic"

console.log(carro.mostrarCarro());
console.log(carro2.mostrarCarro());