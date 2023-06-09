class Carro {
    constructor(placa, ano, cor, modelo, quilometragem, diaria, observacoes) {
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
        this.quilometragem = quilometragem;
        this.diaria = diaria;
        this.observacoes = observacoes;
    }
}

class CarroEsportivo extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, diaria, observacoes, tmpChegar100, melhorias) {
        super(placa, ano, cor, modelo, quilometragem, diaria, observacoes);
        this.tmpChegar100 = tmpChegar100;
        this.melhorias = melhorias;
    }
}

class CarroUtilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, diaria, observacoes, qtdPassageiros, tmhBagageiro, kmPorLitro) {
        super(placa, ano, cor, modelo, quilometragem, diaria, observacoes);
        this.qtdPassageiros = qtdPassageiros;
        this.tmhBagageiro = tmhBagageiro;
        this.kmPorLitro = kmPorLitro;
    }
}

class Reserva {
    constructor(cliente, carro, codigo, status, dtInicio, dtFim) {
        this.cliente = cliente;
        this.carro = carro;
        this.codigo = codigo;
        this.status = status;
        this.dtInicio = dtInicio;
        this.dtFim = dtFim;
    }
}

class Pessoa {
    constructor(nome, cpf, idade, endereco, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cpf, idade, endereco, telefone, dtContratacao, salario, qtdAlugueis, status) {
        super(nome, cpf, idade, endereco, telefone);
        this.dtContratacao = dtContratacao;
        this.salario = salario;
        this.qtdAlugueis = qtdAlugueis;
        this.status = status;
    }
}

class Cliente extends Pessoa {
    constructor(nome, cpf, idade, endereco, telefone, dtNascimento, nuCNH, ftCNH, anoVencCNH, email) {
        super(nome, cpf, idade, endereco, telefone);
        this.dtNascimento = dtNascimento;
        this.nuCNH = nuCNH;
        this.ftCNH = ftCNH;
        this.anoVencCNH = anoVencCNH;
        this.email = email;
    }
}

class Promocao {
    constructor(titulo, descricao, dtValidade) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dtValidade = dtValidade;
    }
}

let carros = [];
let reservas = [];
let funcionarios = [];
let clientes = [];
let promocoes = [];

// Função para cadastrar um carro na base de dados
function cadastrarCarro(carro) {
    carros.push(carro);
    console.log("Carro cadastrado com sucesso!");
}

// Função para cadastrar uma reserva na base de dados
function cadastrarReserva(reserva) {
    reservas.push(reserva);
    console.log("Reserva cadastrada com sucesso!");
}

// Função para cadastrar um funcionário na base de dados
function cadastrarFuncionario(funcionario) {
    funcionarios.push(funcionario);
    console.log("Funcionário cadastrado com sucesso!");
}

// Função para cadastrar um cliente na base de dados
function cadastrarCliente(cliente) {
    clientes.push(cliente);
    console.log("Cliente cadastrado com sucesso!");
}

// Função para cadastrar uma promoção na base de dados
function cadastrarPromocao(promocao) {
    promocoes.push(promocao);
    console.log("Promoção cadastrada com sucesso!");
}

// Exemplo de utilização das funções de cadastro
const carro1 = new Carro("ABC123", 2021, "Preto", "Modelo1", 10000, 100, "Observações 1");
cadastrarCarro(carro1);

const cliente1 = new Cliente("Gabriel", "123456789", 25, "Rua A", "123456789", "01/01/1990", "ABC123", "foto_cnh.jpg", "01/01/2025", "cliente1@example.com");
cadastrarCliente(cliente1);

const reserva1 = new Reserva(cliente1, carro1, "RES001", "Ativa", "01/05/2023", "10/05/2023");
cadastrarReserva(reserva1);

console.log(carros);
console.log(clientes);
console.log(reservas);