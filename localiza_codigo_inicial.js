class Carro{
    constructor(placa, ano, cor, modelo, quilometragem, diaria, observacao){
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
        this.quilometragem = quilometragem;
        this.diaria = diaria;
        this.observacao = observacao;
    }    
}

class Esportivo extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, diaria, observacao){
        super(placa, ano, cor, modelo, quilometragem, diaria, observacao);
        this.tmp100km = tmp100km;
        this.melhorias = melhorias;
    }
}

class Utilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, diaria, observacao){
        super(placa, ano, cor, modelo, quilometragem, diaria, observacao);
        this.qtdPassageiros = qtdPassageiros;
        this.tmBagageiro = tmBagageiro;
        this.kmLitro = kmLitro;
    }
}

class Reserva {
    constructor(codigo, carro, cliente, status, dtInicio, dtFim){
        this.codigo = codigo;
        this.carro = carro;
        this.cliente = cliente;
        this.status = status;
        this.dtInicio = dtInicio;
        this.dtFim = dtFim;
    }
}

class Pessoa {
    //nome, cpf, idade, endereço, telefone
    constructor(nome, cpf, idade, endereco, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

class Funcionario extends Pessoa{
    constructor(nome, cpf, idade, endereço, telefone) {
        super(nome, cpf, idade, endereço, telefone);
        this.dtContratacao = dtContratacao;
        this.salario = salario;
        this.qtAlugueis = qtAlugueis;
    }
}

class Cliente extends Pessoa{
    constructor(nome, cpf, idade, endereço, telefone) {
        super(nome, cpf, idade, endereço, telefone);
        this.dtNascimento = dtNascimento;
        this.cnh = cnh;
        this.dtValidade = dtValidade;
        this.dtPrimeiraHabilitacao = dtPrimeiraHabilitacao;
        this.qtAlugueis = qtAlugueis;
    }
}

class Promocao {
    constructor(titulo, descricao, dtValidade) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dtValidade = dtValidade;
    }
}

class Localiza {
    constructor() {
        this.clientes = [];
    }

    addCliente(cliente) {
        this.clientes.push(cliente);
    }

    getCliente(cpf) {
        return this.clientes.filter(cliente => {
            if(cliente.getCPF() == cpf) {
                return cliente;
            }
        });
    }
}


