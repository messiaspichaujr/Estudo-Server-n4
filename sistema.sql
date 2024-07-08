create database sistema;

use sistema;

create table usuarios (
    cpf VARCHAR(11) NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL
);

insert into usuarios(cpf,nome,email,telefone)
    values(12886811947,"Yasmin","yasmin@teste.com",992035484);
