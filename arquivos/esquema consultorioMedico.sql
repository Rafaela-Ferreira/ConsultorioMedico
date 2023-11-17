-- RAFAELA FERREIRA DOS SANTOS - RA 23538

CREATE TABLE usuarios (
    ID_Usuario int NOT NULL AUTO_INCREMENT,
    Nome_Usuario VARCHAR(255) NOT NULL,
    Senha VARCHAR(255) NOT null,
    PRIMARY KEY(ID_Usuario)
);

CREATE TABLE Especialidades (
    ID_Especialidade INT NOT NULL auto_increment,
    Nome_Especialidade VARCHAR(255) NOT null,
    PRIMARY KEY( ID_Especialidade)
);

CREATE TABLE Medicos (
    ID_Medico INT NOT NULL auto_increment,
    Nome_Medico NVARCHAR(255) NOT NULL,
    ID_Especialidade INT,
    FOREIGN KEY (ID_Especialidade) references Especialidades(ID_Especialidade),
    PRIMARY KEY( ID_Medico)
);

CREATE TABLE Pacientes (
    ID_Paciente INT NOT NULL auto_increment,
    Nome_Paciente NVARCHAR(255) NOT null,
    PRIMARY KEY(ID_Paciente)
);

CREATE TABLE TiposConsulta (
    ID_TipoConsulta INT NOT NULL auto_increment,
    Nome_TipoConsulta NVARCHAR(255) NOT null,
    PRIMARY KEY(ID_TipoConsulta)
);

CREATE TABLE StatusConsulta (
    ID_StatusConsulta INT NOT NULL auto_increment,
    Nome_StatusConsulta NVARCHAR(255) NOT null,
    PRIMARY KEY(ID_StatusConsulta)
);

CREATE TABLE Consultas (
    ID_Consulta INT  NOT NULL auto_increment,
    Data DATE,
    Hora TIME,
    ID_Medico INT,
    ID_Paciente INT,
    ID_TipoConsulta INT,
    ID_StatusConsulta INT,
    PRIMARY KEY(ID_Consulta),
    FOREIGN KEY (ID_Medico) REFERENCES Medicos(ID_Medico),
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente),
    FOREIGN KEY (ID_TipoConsulta) REFERENCES TiposConsulta(ID_TipoConsulta),
    FOREIGN KEY (ID_StatusConsulta) references StatusConsulta(ID_StatusConsulta)
);

CREATE TABLE Email (
    ID_Email INT  NOT NULL auto_increment,
    Email_Paciente NVARCHAR(255) NOT NULL,
    ID_Consulta INT,
    FOREIGN KEY (ID_Consulta) REFERENCES Consultas(ID_Consulta),
    PRIMARY KEY(ID_Email)
);


-- Inserção de registros de exemplo

-- Tabela Usuarios
INSERT INTO Usuarios (ID_Usuario, Nome_Usuario, Senha) VALUES (1, 'usuario1', 'senha123');
INSERT INTO Usuarios (ID_Usuario, Nome_Usuario, Senha) VALUES (2, 'usuario2', 'senha456');

-- Tabela Especialidades
INSERT INTO Especialidades (ID_Especialidade, Nome_Especialidade) VALUES (1, 'Cardiologia');
INSERT INTO Especialidades (ID_Especialidade, Nome_Especialidade) VALUES (2, 'Gastroenterologia');
INSERT INTO Especialidades (ID_Especialidade, Nome_Especialidade) VALUES (3, 'Clinico Geral');

-- Tabela Medicos
INSERT INTO Medicos (ID_Medico, Nome_Medico, ID_Especialidade) VALUES (1, 'Dr. João', 1);
INSERT INTO Medicos (ID_Medico, Nome_Medico, ID_Especialidade) VALUES (2, 'Dr. Maria', 2);

-- Tabela Pacientes
INSERT INTO Pacientes (ID_Paciente, Nome_Paciente) VALUES (1, 'Paciente1');
INSERT INTO Pacientes (ID_Paciente, Nome_Paciente) VALUES (2, 'Paciente2');

-- Tabela TiposConsulta
INSERT INTO TiposConsulta (ID_TipoConsulta, Nome_TipoConsulta) VALUES (1, 'Primeira Consulta');
INSERT INTO TiposConsulta (ID_TipoConsulta, Nome_TipoConsulta) VALUES (2, 'Paciente Frequente');
INSERT INTO TiposConsulta (ID_TipoConsulta, Nome_TipoConsulta) VALUES (3, 'Retorno');

-- Tabela StatusConsulta
INSERT INTO StatusConsulta (ID_StatusConsulta, Nome_StatusConsulta) VALUES (1, 'Ativa');
INSERT INTO StatusConsulta (ID_StatusConsulta, Nome_StatusConsulta) VALUES (2, 'Cancelada');
INSERT INTO StatusConsulta (ID_StatusConsulta, Nome_StatusConsulta) VALUES (3, 'Realizada');

-- Tabela Consultas
INSERT INTO Consultas (ID_Consulta, Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta) 
VALUES (1, '2023-10-27', '14:00:00', 1, 1, 1, 1);
INSERT INTO Consultas (ID_Consulta, Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta) 
VALUES (2, '2023-10-28', '15:30:00', 2, 2, 2, 2);

-- Tabela Email
INSERT INTO Email (ID_Email, Email_Paciente, ID_Consulta) VALUES (1, 'paciente1@example.com', 1);
INSERT INTO Email (ID_Email, Email_Paciente, ID_Consulta) VALUES (2, 'paciente2@example.com', 2);


--Tabela Consultas
SELECT
	c.ID_Consulta,
	c.Data,
	c.Hora,
	m.Nome_Medico as NomeMedico,
	p.Nome_Paciente as NomePaciente,
	tc.Nome_TipoConsulta as NomeTipoConsulta,
	sc.Nome_StatusConsulta as NomeStatusConsulta
FROM
    Consultas c
    INNER JOIN Medicos m ON c.ID_Medico = m.ID_Medico
    INNER JOIN Pacientes p ON c.ID_Paciente = p.ID_Paciente
    INNER JOIN TiposConsulta tc ON c.ID_TipoConsulta = tc.ID_TipoConsulta
    INNER JOIN StatusConsulta sc ON c.ID_StatusConsulta = sc.ID_StatusConsulta
ORDER BY
    c.ID_Consulta;



