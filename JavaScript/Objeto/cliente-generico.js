function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cfp = cpf
    this.email = email
    this.saldo = saldo
    this.deposita = function(valor){
        this.saldo += valor  
    }
};

const c1 = new Cliente('Gustavo', "876876876", "g@a.com", 2000)
//console.log(c1)

function ClientePoupança()