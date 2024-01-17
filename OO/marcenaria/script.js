class Sofa {
    constructor( quant_lugares, cor, reclinavel) {
        this.quant_lugares = quant_lugares;
        this.cor = cor;
        this.reclinavel = reclinavel;
    }

    sofReclinavel() {
        if(this.reclinavel === true) {
            console.log("reclinavel")
        } else {
            console.log("Não reclinavel")
        }
    }
}

let sofa = new Sofa(4, "azul", false);

sofa.sofReclinavel();


