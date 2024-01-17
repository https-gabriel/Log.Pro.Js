//Agência bancária  com orientação a objeto

class ContaBancaria {
    constructor() {
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 30
        this.limite = 1000
    }

    depositar(valorDesposito) {
        this.saldo += valorDesposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }
}

const gabriel = new ContaBancaria();

console.log(gabriel.saldo);
gabriel.depositar(450);
console.log(gabriel.saldo);
gabriel.sacar(2000);
console.log(gabriel.saldo);